export class CalendarItem{
  id: string;
  title:string;
  dateTime:Date;
  classId: string;

  constructor(id, title, dateTime){
    this.id = id;
    console.log(this.id);
    this.title = title;
    this.dateTime = dateTime;
  }

  public getId(){
    return this.id;
  }

  toString(){
    return this.dateTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"}) + " - " + this.title;
  }
}

