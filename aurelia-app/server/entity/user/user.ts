import {LogonDetails} from "./logon-details";
import {UserDetails} from "./user-details";

export class User {
  uid:string;
  logonDetails:LogonDetails;
  userDetails:UserDetails;

  constructor(uid,logonDetails:LogonDetails, userDetails:UserDetails){
    this.uid = uid;
    this.logonDetails = logonDetails;
    this.userDetails = userDetails;
  }
}

