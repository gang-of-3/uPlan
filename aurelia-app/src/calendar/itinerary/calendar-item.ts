export class CalendarItem{
  id: string;
  title:string;
  dateTime:Date;
  classId: string;
  description:String;

  constructor(id, title, dateTime, descirption){
    this.id = id;
    this.title = title;
    this.dateTime = dateTime;
    this.description = descirption;
  }

  public getId(){
    return this.id;
  }

  toString(){
    return new Date(this.dateTime).toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"}) + " - " + this.title;
  }
}

