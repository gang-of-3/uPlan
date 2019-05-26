import {TodoInformation} from "../todo-information";
import $ from "jquery";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ExternalUrl} from "../../shared/external-url";

export class TodoEdit{
  information: TodoInformation;
  externalCallUtility: ExternalCallUtility;

  constructor(){
    this.externalCallUtility = new ExternalCallUtility();
    //unfortunate integration with bootstrap modal
    $(document).on('show.bs.modal','#exampleModal', () => {
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
