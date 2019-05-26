import {TodoInformation} from "../todo-information";
import $ from "jquery";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ExternalUrl} from "../../shared/external-url";
import {autoinject, bindable} from "aurelia-framework";
import {TodoInformationService} from "../todo-information-service";

@autoinject
export class TodoEdit{
  @bindable information: TodoInformation;

  constructor(private externalCallUtility: ExternalCallUtility, private todoInformationService: TodoInformationService){
  }

  public submit(){
    if(this.isNew()){
      this.externalCallUtility.post(ExternalUrl.TODO, this.information).then((response) => {
        var newId = response.content.id;
        this.information.id = newId;
        this.todoInformationService.addItem(this.information);
      });
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
