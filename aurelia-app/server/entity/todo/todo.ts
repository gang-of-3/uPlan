export class Todo {
  id: number; //what should that be called? int didn't seem right
  uid:string;
  title: string;
  dueDate: string;
  description: string;

  constructor(id, /*uid,*/title, dueDate, description){
    this.id = id;
    //this.uid = uid;
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
  }
}

