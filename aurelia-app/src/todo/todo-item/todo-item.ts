import {TodoInformation} from "../todo-information";
import {bindable} from "aurelia-framework";
export class TodoItem{
  @bindable  information:TodoInformation;
}
