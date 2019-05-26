import {HttpClient} from "aurelia-http-client";

export class ExternalCallUtility{
  client:HttpClient;

  constructor(){
    this.client = new HttpClient();
  }

  get(){
    return this.client.get("/ws/test");
  }
}
