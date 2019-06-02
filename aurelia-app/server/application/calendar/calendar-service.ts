import {CalendarDao} from "../../entity/calendar/calendar-dao";
import {CalendarItem} from "../../entity/calendar/calendar-item";
import {CalendarFilter} from "../filters/calendar-filter";
import {ClassService} from "../class/class-service"


export class CalendarService {
  calendarDao: CalendarDao;
  calendarItem :CalendarItem;
  calendarFilter: CalendarFilter;
  classService: ClassService;
  constructor() {
    this.calendarDao = new CalendarDao();
    this.classService = new ClassService();
  }

  getCalendarItems(uid, type){

    let c_items = this.calendarDao.getCalendarItems(uid);
    if (type != undefined) {
      return this.calendarFilter.filterCalendarItems(c_items, type);
    }

    let class_items = this.classService.getClassItems(uid);
    for (let i = 0; i < class_items.length; i++){
      c_items.push(class_items[i][0]);
    }

    return c_items;
  }


  editCalendarItem(obj){
    let c_item = this.objToCalendarItem(obj);

    this.calendarDao.editCalendarItem(c_item);
  }

  addCalendarItem(obj){
    let c_item = this.objToCalendarItem(obj);
    return this.calendarDao.addCalendarItem(c_item);
  }

  deleteCalendarItem(id){
    this.calendarDao.deleteCalendarItem(id);
  }


  objToCalendarItem(obj){
    this.calendarItem = new CalendarItem(obj.id, obj.uid, obj.title, obj.dateTime, obj.type, obj.classId, obj.description);

    return this.calendarItem;
  }
}
