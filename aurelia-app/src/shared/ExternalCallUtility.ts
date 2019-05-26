import {HttpClient} from "aurelia-http-client";
import {ExternalUrl} from "./ExternalUrl";

export class ExternalCallUtility{
  client:HttpClient;

  constructor(){
    this.client = new HttpClient();
  }

  get(path: ExternalUrl){
    return this.client.get(path);
  }
}
