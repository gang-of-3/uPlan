import {Todo} from "./todo";

export class TodoDao {

  todos: Array<Todo>;

  constructor() {
    this.todos = new Array<Todo>();

    this.getTestTodos();
  }

  getTodos() {
    return this.todos;
  }

  editTodos(todo){
    for (var i=0; i< this.todos.length; i++){
      if (this.todos[i].id == todo.id) {
        this.todos[i] = todo;
      }
    }
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  deleteTodo(id) {
    for (var i=0; i< this.todos.length; i++){
      if (this.todos[i].id == id) {
        this.todos.splice(i,1);
      }
    }
  }

  getTestTodos(){
    const todo = new Todo(1, false,"Example Assignment", "12/31/2019", "Chew all the gum that you can find until you explode");
    const todo2 = new Todo(2, false,"Other Assignment", "11/30/2020", "More endpoints");
    const todo3 = new Todo(3, false,"Otherer Assignment", "11/30/2020", "Finish endpoints");
    const todo4 = new Todo(4, false,"Type Assignment", "12/31/2019", "Type and type");
    const todo5 = new Todo(5, false,"That Assignment", "11/30/2020", "More endpoints");
    const todo6 = new Todo(6, false,"Assignment", "11/30/2020", "Finish endpoints");


    this.todos.push(todo);
    this.todos.push(todo2);
    this.todos.push(todo3);
    this.todos.push(todo4);
    this.todos.push(todo5);
    this.todos.push(todo6);

  }
}
