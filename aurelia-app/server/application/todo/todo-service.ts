import {TodoDao} from "../../entity/todo/todo-dao";


export class TodoService {
  todoDao: TodoDao;

  constructor() {
    this.todoDao = new TodoDao();
  }

  getTodos(){
    return this.todoDao.getTodos();
  }
}

