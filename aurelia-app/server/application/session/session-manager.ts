export class SessionManager{
    sessions:Map<String,String>;

    constructor(){
      this.sessions = new Map<String,String>();
    }

    generateSession(uid:String){
      var sessionId = uid + new Date().getTime().toString();
      this.sessions.set(sessionId, uid);
      return sessionId;
    }

    lookupUid(sessionId:String){
      return this.sessions.get(sessionId);
    }
}
