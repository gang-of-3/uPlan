export class Todo {
  id: number; //what should that be called? int didn't seem right
  complete:boolean;
  title: string;
  dueDate: string;
  description: string;

  constructor(id, complete,title, dueDate, description){
    this.id = id;
    this.complete = complete;
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
  }

}

