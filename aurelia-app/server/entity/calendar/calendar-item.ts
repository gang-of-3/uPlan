export enum EventType {
  TEST, OFFICE_HOURS, GROUP_MEETING
}

export class CalendarItem {
  id: number;
  uid: string;
  title: string;
  dateTime: Date;
  type: EventType;
  classId: string;
  description: string;



  constructor(id, uid, title, date, type, classId, description){
    this.id = id;
    this.uid = uid;
    this.title = title;
    this.dateTime = date;
    this.type = type;
    this.classId = classId;
    this.description = description;
  }

}
