import {TodoInformation} from "../todo-information";
import $ from "jquery";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ExternalUrl} from "../../shared/external-url";
import {autoinject} from "aurelia-framework";

@autoinject
export class TodoEdit{
  information: TodoInformation;

  constructor(private externalCallUtility: ExternalCallUtility){
    //unfortunate integration with bootstrap modal
    var id = this.information ? this.information.id : "";
    $(document).on('show.bs.modal','#todoEdit' + id, () => {
      this.clear();
    });
  }

  public submit(){
    this.externalCallUtility.post(ExternalUrl.TODO, this.information);
  }

  public clear(){
    this.information = new TodoInformation();
  }
}
