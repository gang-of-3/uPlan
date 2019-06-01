import {TodoInformation} from "./todo-information";

export class TodoInformationService{

  todoItems: TodoInformation[];

  setTodoItems(todoItems: TodoInformation[]) {
    this.todoItems = todoItems;
  }

  removeItem(todoId){
    this.todoItems = this.todoItems.filter((item) => {
      return item.id != todoId;
    });
  }

  addItem(information){
    this.todoItems.push(information);
  }
}
