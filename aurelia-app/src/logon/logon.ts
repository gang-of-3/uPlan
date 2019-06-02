import {LogonInformation} from "./logon-information";
import {autoinject} from "aurelia-framework";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";

@autoinject
export class Logon {
  information: LogonInformation;
  isError: boolean;

  constructor(private externalCallUtility: ExternalCallUtility) {
  }

  logon() {
    this.externalCallUtility.post(ExternalUrl.LOGON, this.information).then((response) => {
      if (response.content.isValid) {
        location.assign('calendar');
      } else {
        this.isError = true;
      }
    });
  }
}
