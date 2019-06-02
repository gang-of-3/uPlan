import {TodoDao} from "../../entity/todo/todo-dao";
import {Todo} from "../../entity/todo/todo";


export class TodoService {
  todoDao: TodoDao;
  todo :Todo;
  constructor() {
    this.todoDao = new TodoDao();
  }

  getTodos(uid){
    return this.todoDao.getTodos(uid);
  }


  editTodo(obj){

    let todo = this.objToTodo(obj);

    this.todoDao.editTodos(todo);


  }

  addTodo(obj){
    let todo = this.objToTodo(obj);

    this.todoDao.addTodo(todo);
  }

  deleteTodo(id){
    this.todoDao.deleteTodo(id);
  }


  objToTodo(obj){
    this.todo = new Todo(obj.id,obj.uid, obj.status, obj.title, obj.dueDate, obj.description);

    return this.todo;
  }
}

