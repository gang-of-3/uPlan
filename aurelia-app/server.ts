var bodyParser = require("body-parser");

var express = require('express');
var app = express();
var port = 3100;

app.use(bodyParser.json());

app.get('/ws/todos', function (req, res) {
  var todoItems = [{id:1,title:"Example Assignment", dueDate:"12/31/2019", description:"Chew all the gum that you can find until you explode"},{id:2,title:"Other Assignment", dueDate:"11/30/2020", description:"More endpoints"}, {id:3,title:"Otherer Assignment", dueDate:"11/30/2020", description:"Finish endpoints"}];
  res.send(todoItems);
});

app.post('/ws/todos', function (req, res) {
  res.end();
});

app.put('/ws/todos/:todoId', function(req, res) {
  res.end();
});

app.delete('/ws/todos/:todoId', function(req, res) {
  res.end();
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
