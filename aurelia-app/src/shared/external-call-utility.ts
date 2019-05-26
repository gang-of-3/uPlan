import {HttpClient} from "aurelia-http-client";
import {ExternalUrl} from "./external-url";

export class ExternalCallUtility{
  client:HttpClient;

  constructor(){
    this.client = new HttpClient();
  }

  get(path: ExternalUrl){
    return this.client.get(path);
  }

  post(path: ExternalUrl, content){
    console.log(content);
    return this.client.post(path, content);
  }
}
