import {TodoInformation} from "./todo-information";

export class Todo {
  todoItems:TodoInformation[];

  constructor(){
    this.todoItems = [];
    this.todoItems.push({title:"Example Assignment", dueDate:"12/31/2019", description:"Chew all the gum that you can find until you explode"});
    this.todoItems.push({title:"Other Assignment", dueDate:"11/30/2020", description:"Keep working"})

  }

  addItem(){
    console.log("ADDING")
  }
}
