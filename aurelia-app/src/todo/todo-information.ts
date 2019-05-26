export enum TodoStatus{
  OUTSTANDING, COMPLETE
}

export class TodoInformation{
  id: number;
  title: String;
  dueDate: String;
  description: String;
  status: TodoStatus;

  constructor(){
    this.id = 0;
    this.status = TodoStatus.OUTSTANDING;
  }
}
