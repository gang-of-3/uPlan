export class Todo {
  id: number;
  uid: string;
  complete:boolean;
  title: string;
  dueDate: string;
  description: string;

  constructor(id, uid, complete,title, dueDate, description){
    this.id = id;
    this.uid = uid;
    this.complete = complete;
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
  }

}

