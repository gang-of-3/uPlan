import {CalendarDao} from "../../entity/calendar/calendar-dao";
import {CalendarItem} from "../../entity/calendar/calendar-item";


export class CalendarService {
  calendarDao: CalendarDao;
  calendarItem :CalendarItem;
  constructor() {
    this.calendarDao = new CalendarDao();
  }

  getCalendarItems(uid){
    return this.calendarDao.getCalendarItems(uid);
  }


  editCalendarItem(obj){

    let todo = this.objToCalendarItem(obj);

    this.calendarDao.editCalendarItem(todo);


  }

  addCalendarItem(obj){
    let todo = this.objToCalendarItem(obj);

    this.calendarDao.addCalendarItem(todo);
  }

  deleteCalendarItem(id){
    this.calendarDao.deleteCalendarItem(id);
  }


  objToCalendarItem(obj){
    this.calendarItem = new CalendarItem(obj.id, obj.uid, obj.title, obj.dateTime, obj.description);

    return this.calendarItem;
  }
}
