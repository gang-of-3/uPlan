import {LogonInformation} from "./logon-information";
import {autoinject} from "aurelia-framework";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";
import {Router} from "aurelia-router";

@autoinject
export class Logon{
  information:LogonInformation;
  isError:boolean;

  constructor(private externalCallUtility:ExternalCallUtility, private router: Router){}

  logon(){
    this.externalCallUtility.post(ExternalUrl.LOGON, this.information).then((response)=>{
      if(response.content.isValid) {
        this.router.navigateToRoute('todo');
      }else {
        this.isError = true;
      }
    });
  }
}
