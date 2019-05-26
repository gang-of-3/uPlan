import {TodoInformation} from "./todo-information";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";
import {autoinject} from "aurelia-framework";

@autoinject
export class Todo {
  todoItems: TodoInformation[];
  newTodoItem: TodoInformation;

  constructor(private externalCallUtility: ExternalCallUtility) {
    this.newTodoItem = new TodoInformation();
    externalCallUtility.get(ExternalUrl.TODO).then(data => {
      this.todoItems = data.content;
    });
  }

  addItem() {
    this.newTodoItem = new TodoInformation();
  }
}
