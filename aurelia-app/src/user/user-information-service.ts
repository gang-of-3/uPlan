import {UserType} from "../../server/entity/user/user-details";
import {UserInformation} from "./user-information";
import {autoinject} from "aurelia-framework";
import {ExternalUrl} from "../shared/external-url";
import {ExternalCallUtility} from "../shared/external-call-utility";

@autoinject
export class UserInformationService {
  information: UserInformation;

  constructor(private externalCallUtility: ExternalCallUtility) {
  }

   getUserInformation() {
    var promise;
    if (!this.information) {
      promise = this.externalCallUtility.get(ExternalUrl.USERS).then((userResponse) => {
        this.information = userResponse.content;
        return this.information;
      });
    }else{
      promise = Promise.resolve(this.information);
    }

    return promise;
  }
}
