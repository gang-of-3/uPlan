import {TodoInformation} from "./todo-information";
import {ExternalCallUtility} from "../shared/ExternalCallUtility";
import {ExternalUrl} from "../shared/ExternalUrl";

export class Todo {
  todoItems: TodoInformation[];

  constructor() {
    const utility = new ExternalCallUtility();
    utility.get(ExternalUrl.TODO).then(data => {
      this.todoItems = data.content;
    });
  }

  addItem() {
    console.log("ADDING")
  }
}
