import {Todo, TodoStatus} from "./todo";

export class TodoDao {

  todos: Array<Todo>;


  constructor() {
    this.todos = new Array<Todo>();

    this.getTestTodos();
  }

  getTodos(uid) {
    let userTodos = [];
    for(let i=0; i < this.todos.length; i++){
      if (this.todos[i].uid == uid){
        userTodos.push(this.todos[i])
      }
    }

    return userTodos;

  }

  editTodos(todo){
    for (let i=0; i< this.todos.length; i++){
      if (this.todos[i].id == todo.id) {
        this.todos[i] = todo;
      }
    }
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  deleteTodo(id) {
    for (let i=0; i< this.todos.length; i++){
      if (this.todos[i].id == id) {
        this.todos.splice(i,1);
      }
    }
  }

  getTestTodos(){
    const todo = new Todo(1, "12", TodoStatus.INCOMPLETE,"Example Assignment", "12/31/2019", "Chew all the gum that you can find until you explode");
    const todo2 = new Todo(2, "12",TodoStatus.INCOMPLETE,"Other Assignment", "11/30/2020", "More endpoints");
    const todo3 = new Todo(3, "12",TodoStatus.INCOMPLETE, "Other-er Assignment", "11/30/2020", "Finish endpoints");
    const todo4 = new Todo(4, "12",TodoStatus.INCOMPLETE, "Type Assignment", "12/31/2019", "Type and type");
    const todo5 = new Todo(5, "12",TodoStatus.INCOMPLETE, "That Assignment", "11/30/2020", "More endpoints");
    const todo6 = new Todo(6, "12",TodoStatus.INCOMPLETE, "Assignment", "11/30/2020", "Finish endpoints");
    const todo7 = new Todo(7,"13", TodoStatus.INCOMPLETE, "Sue's only assignment", "11/30/2020", "One lonely assignment");


    this.todos.push(todo);
    this.todos.push(todo2);
    this.todos.push(todo3);
    this.todos.push(todo4);
    this.todos.push(todo5);
    this.todos.push(todo6);
    this.todos.push(todo7);

  }
}
