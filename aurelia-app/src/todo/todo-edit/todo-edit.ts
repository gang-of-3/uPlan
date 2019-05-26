import {TodoInformation} from "../todo-information";
import $ from "jquery";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ExternalUrl} from "../../shared/external-url";
import {autoinject, bindable} from "aurelia-framework";

@autoinject
export class TodoEdit{
  @bindable information: TodoInformation;

  constructor(private externalCallUtility: ExternalCallUtility){
  }

  public submit(){
    if(this.isNew()){
      this.externalCallUtility.post(ExternalUrl.TODO, this.information);
    }else{
      this.externalCallUtility.put(ExternalUrl.TODO, this.information, this.information.id.toString());
    }

  }

  public clear(){
    this.information = new TodoInformation();
  }

  public isNew(){
    return this.information ? this.information.id == 0 : false;
  }
}
