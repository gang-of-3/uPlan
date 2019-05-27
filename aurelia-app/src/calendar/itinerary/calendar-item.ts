export class CalendarItem{
  title:string;
  dateTime:Date;

  constructor(title, dateTime){
    this.title = title;
    this.dateTime = dateTime;
  }

  toString(){
    return this.dateTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"}) + " - " + this.title;
  }
}
