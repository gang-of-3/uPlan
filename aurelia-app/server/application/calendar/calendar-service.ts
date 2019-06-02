import {CalendarDao} from "../../entity/calendar/calendar-dao";
import {CalendarItem} from "../../entity/calendar/calendar-item";
import {CalendarFilter} from "../filters/calendar-filter";


export class CalendarService {
  calendarDao: CalendarDao;
  calendarItem :CalendarItem;
  calendarFilter: CalendarFilter;
  constructor() {
    this.calendarDao = new CalendarDao();
  }

  getCalendarItems(uid, type){

    let c_items = this.calendarDao.getCalendarItems(uid);
    if (type != undefined) {
      return this.calendarFilter.filterCalendarItems(c_items, type);
    }

    return c_items;
  }


  editCalendarItem(obj){

    let c_item = this.objToCalendarItem(obj);

    this.calendarDao.editCalendarItem(c_item);


  }

  addCalendarItem(obj){
    let todo = this.objToCalendarItem(obj);

    this.calendarDao.addCalendarItem(todo);
  }

  deleteCalendarItem(id){
    this.calendarDao.deleteCalendarItem(id);
  }


  objToCalendarItem(obj){
    this.calendarItem = new CalendarItem(obj.id, obj.uid, obj.title, obj.dateTime, obj.type, obj.description);

    return this.calendarItem;
  }
}
