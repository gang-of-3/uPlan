import {TodoInformation} from "./todo-information";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";
import {autoinject, BindingEngine} from "aurelia-framework";
import {TodoInformationService} from "./todo-information-service";

@autoinject
export class Todo {
  todoItems: TodoInformation[];
  newTodoItem: TodoInformation;

  constructor(private externalCallUtility: ExternalCallUtility, private todoInformationService: TodoInformationService, bindingEngine:BindingEngine) {
    this.newTodoItem = new TodoInformation();
    externalCallUtility.get(ExternalUrl.TODO).then(data => {
      this.todoInformationService.setTodoItems(data.content.todoItems);
    });
    bindingEngine.propertyObserver(this.todoInformationService, 'todoItems').subscribe((newValue, oldValue) => {
      this.todoItems = newValue;
    });
  }

  addItem() {
    this.newTodoItem = new TodoInformation();
  }
}
