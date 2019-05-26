import {TodoInformation, TodoStatus} from "../todo-information";
import {autoinject, bindable} from "aurelia-framework";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ExternalUrl} from "../../shared/external-url";
import {TodoInformationService} from "../todo-information-service";

@autoinject
export class TodoItem{
  @bindable  information:TodoInformation;


  constructor(private externalCallUtility: ExternalCallUtility, private todoInformationService: TodoInformationService){

  }

  delete(){
    this.todoInformationService.removeItem(this.information.id)
    this.externalCallUtility.delete(ExternalUrl.TODO,this.information.id.toString())
  }

  markComplete(){
    this.information.status = TodoStatus.COMPLETE;
    this.externalCallUtility.put(ExternalUrl.TODO,this.information,this.information.id.toString())
  }
}
