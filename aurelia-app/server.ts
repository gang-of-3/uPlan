import {UserService} from "./server/application/user/user-service";
import {SessionManager} from "./server/application/session/session-manager";
import {TodoService} from "./server/application/todo/todo-service";

var bodyParser = require("body-parser");

var express = require('express');
var app = express();
var port = 3100;
var cookieParser = require('cookie-parser');


const userService = new UserService();
const sessionManager = new SessionManager();
const todoService = new TodoService();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  if (!req.url.includes('logon')) {
    var sessionId = req.cookies['UPLAN_SESSION_ID'];
    var uid = sessionManager.lookupUid(sessionId);
    if (!uid) {
      res.status(401).send('Invalid Session');
    }
    req.body.uid = uid;
  }
  next();
});

app.post('/ws/logon', function (req, res) {
  var uid = userService.lookupUid(req.body.username, req.body.password);
  var exists = uid !== "0";
  if (exists) {
    const sessionId = sessionManager.generateSession(uid);
    res.cookie('UPLAN_SESSION_ID', sessionId);
  } else {
    res.clearCookie('UPLAN_SESSION_ID');
  }

  res.send({isValid: exists});
});

app.get('/ws/todos', function (req, res) {
  //get all tdo items for person

  const todoItems = todoService.getTodos(req.body.uid);

    ////Old hardcoded version////

  /*var todoItems = [{
    id: 1,
    title: "Example Assignment",
    dueDate: "12/31/2019",
    description: "Chew all the gum that you can find until you explode"
  }, {id: 2, title: "Other Assignment", dueDate: "11/30/2020", description: "More endpoints"}, {
    id: 3,
    title: "Otherer Assignment",
    dueDate: "11/30/2020",
    description: "Finish endpoints"
  },
    {id: 4, title: "Type Assignment", dueDate: "12/31/2019", description: "Type and type"}, {
      id: 5,
      title: "That Assignment",
      dueDate: "11/30/2020",
      description: "More endpoints"
    }, {id: 6, title: "Assignment", dueDate: "11/30/2020", description: "Finish endpoints"}];

  */

  res.send({todoItems:todoItems});
});

app.post('/ws/todos', function (req, res) {
  //save a new tdo item
  //return the id of the new item
  todoService.addTodo(req.body);
  res.end();
});

app.put('/ws/todos/:todoId', function (req, res) {
  //update an existing tdo item
  todoService.editTodo(req.body);
  res.end();
});

app.delete('/ws/todos/:todoId', function (req, res) {
  //remove a tdo item

  todoService.deleteTodo(req.params.todoId);
  res.end();
});

app.get('/ws/users', function (req, res) {
  const details = userService.lookupUserDetails(req.body.uid);
  res.send(details);
});


app.listen(port, function () {
  console.log('Listening on port ' + port);
});
