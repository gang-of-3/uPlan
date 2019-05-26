var bodyParser = require("body-parser");

var express = require('express');
var app = express();
var port = 3100;

app.use(bodyParser.json());

app.get('/ws/todos', function (req, res) {
  //get all tdo items for person
  var todoItems = [{id:1,title:"Example Assignment", dueDate:"12/31/2019", description:"Chew all the gum that you can find until you explode"},{id:2,title:"Other Assignment", dueDate:"11/30/2020", description:"More endpoints"}, {id:3,title:"Otherer Assignment", dueDate:"11/30/2020", description:"Finish endpoints"},
    {id:4,title:"Type Assignment", dueDate:"12/31/2019", description:"Type and type"},{id:5,title:"That Assignment", dueDate:"11/30/2020", description:"More endpoints"}, {id:6,title:"Assignment", dueDate:"11/30/2020", description:"Finish endpoints"}];
  res.send(todoItems);
});

app.post('/ws/todos', function (req, res) {
  //save a new tdo item
  res.end();
});

app.put('/ws/todos/:todoId', function(req, res) {
  //update an existing tdo item
  res.end();
});

app.delete('/ws/todos/:todoId', function(req, res) {
  //remove a tdo item
  res.end();
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
