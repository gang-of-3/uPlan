import {LogonInformation} from "../../../src/logon/logon-information";
import {UserDao} from "../../entity/user/user-dao";
import {LogonDetails} from "../../entity/user/logon-details";

export class UserService {
  userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  lookupUid(username: string, password: string) {
    var logonDetails = new LogonDetails(username, password);
    return this.userDao.retrieveUid(logonDetails);
  }
}
