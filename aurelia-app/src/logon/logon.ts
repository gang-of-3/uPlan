import {LogonInformation} from "./logon-information";
import {autoinject} from "aurelia-framework";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";
import {Router} from "aurelia-router";
import {UserInformationService} from "../user/user-information-service";

@autoinject
export class Logon {
  information: LogonInformation;
  isError: boolean;

  constructor(private externalCallUtility: ExternalCallUtility) {
  }

  logon() {
    this.externalCallUtility.post(ExternalUrl.LOGON, this.information).then((response) => {
      if (response.content.isValid) {
        location.assign('todo');
      } else {
        this.isError = true;
      }
    });
  }
}
