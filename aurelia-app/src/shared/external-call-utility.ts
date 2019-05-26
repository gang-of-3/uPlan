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
    var fullPath = path.toString();

    return this.client.post(fullPath, content);
  }

  put(path: ExternalUrl, content, suffix:String){
    var fullPath = path + "/" + suffix;

    return this.client.post(fullPath, content);
  }

  delete(path: ExternalUrl, suffix?:String){
    var fullPath = path + "/" + suffix;

    return this.client.delete(fullPath);
  }
}
