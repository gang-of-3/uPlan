import {autoinject, BindingEngine} from "aurelia-framework";
import {ExternalUrl} from "./shared/external-url";
import {ExternalCallUtility} from "./shared/external-call-utility";
import {Router} from "aurelia-router";

@autoinject
export class NavBar{
  isSecured:boolean;

  constructor(private externalCallUtility:ExternalCallUtility, private router:Router, private bindingEngine:BindingEngine){

  }

  attached(){
    this.checkSecured(this.router.currentInstruction.config.name); //name of the route
    this.bindingEngine.propertyObserver(this.router, 'currentInstruction').subscribe((newValue, oldValue) => this.checkSecured(newValue.config.name));
  }

  checkSecured(route){
    this.isSecured = route !== "logon"; //name of the route
  }

  logout(){
    this.externalCallUtility.post(ExternalUrl.LOGON, {}).then((response)=>{
      this.router.navigateToRoute('logon');
    });
  }
}
