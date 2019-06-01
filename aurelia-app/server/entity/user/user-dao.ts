import {User} from "./user";
import {LogonDetails} from "./logon-details";
import {UserDetails, UserType} from "./user-details";

export class UserDao {
  users: Map<String, User>;

  constructor() {
    const user = new User("12", new LogonDetails("mike@drexel.edu", "sha1$5e1c2f23$1$d4a1d9b19b8bb00ca8a615e81cc81f93f61bc1d1"), new UserDetails("Mike", UserType.STUDENT));
    const user2 = new User("13", new LogonDetails("sue@drexel.edu", "sha1$5e1c2f23$1$d4a1d9b19b8bb00ca8a615e81cc81f93f61bc1d1"), new UserDetails("Sue", UserType.INSTRUCTOR));
    this.users = new Map<String, User>();
    this.users.set("12", user);
    this.users.set("13", user2);
  }

  retrieveUid(logonDetails: LogonDetails) {
    var uid = "0";
    Array.from(this.users.values()).filter((item) => {
      if (logonDetails.equals(item.logonDetails)) {
        uid = item.uid;
      }
    });
    return uid;
  }

  retrieveUserDetails(uid:String){
    return this.users.get(uid).userDetails;
  }
}
