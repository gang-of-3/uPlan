import {Todo} from "./todo";

export class TodoDao {

  todos: Array<Todo>;

  constructor() {
    const todo = new Todo(1,"Example Assignment","12/31/2019", "Chew all the gum that you can find until you explode");
    const todo2 = new Todo(2,"Other Assignment", "11/30/2020", "More endpoints");
    const todo3 = new Todo(3,"Otherer Assignment","11/30/2020","Finish endpoints");
    const todo4 = new Todo(4,"Type Assignment", "12/31/2019", "Type and type");
    const todo5 = new Todo(5,"That Assignment","11/30/2020","More endpoints");
    const todo6 = new Todo(6, "Assignment", "11/30/2020", "Finish endpoints");

    this.todos  = new Array<Todo>();
    this.todos.push(todo);
    this.todos.push(todo2);
    this.todos.push(todo3);
    this.todos.push(todo4);
    this.todos.push(todo5);
    this.todos.push(todo6);


  }

  getTodos(){
    return this.todos;
  }

}

