export class CalendarItem{
  title:string;
  dateTime:string;

  constructor(title, dateTime){
    this.title = title;
    this.dateTime = dateTime;
  }

  getDate(){
    return new Date(this.dateTime);
  }

  toString(){
    return this.getDate().toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"}) + " - " + this.title;
  }
}
