export class CalendarItem {
  id: number;
  uid: string;
  title: string;
  dateTime: Date;
  description: string;



  constructor(id, uid, title, date, description){
    this.id = id;
    this.uid = uid;
    this.title = title;
    this.dateTime = date;
    this.description = description;
  }

}
