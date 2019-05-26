export class LogonDetails {
  username: string;
  password: string;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  equals(logonDetails:LogonDetails){
    return this.username === logonDetails.username && this.password === logonDetails.password;
  }
}
