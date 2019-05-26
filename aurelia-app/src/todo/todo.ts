import {TodoInformation} from "./todo-information";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";
import {autoinject} from "aurelia-framework";

@autoinject
export class Todo {
  todoItems: TodoInformation[];

  constructor(private externalCallUtility: ExternalCallUtility) {
    externalCallUtility.get(ExternalUrl.TODO).then(data => {
      this.todoItems = data.content;
    });
  }

  addItem() {
    console.log("ADDING")
  }
}
