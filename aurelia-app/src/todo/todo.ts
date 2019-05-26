import {TodoInformation} from "./todo-information";
import {ExternalCallUtility} from "../shared/ExternalCallUtility";

export class Todo {
  todoItems: TodoInformation[];

  constructor() {
    const utility = new ExternalCallUtility();
    utility.get().then(data => {
      this.todoItems = data.content;
    });
  }

  addItem() {
    console.log("ADDING")
  }
}
