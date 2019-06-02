import {ClassDao} from '../../entity/class/class-dao'
import {CalendarDao} from "../../entity/calendar/calendar-dao";

export class ClassService {

  classDao: ClassDao;

  constructor(calendarDao:CalendarDao) {
    this.classDao = new ClassDao(calendarDao);
  }

  getClassItems(uid){
    return this.classDao.getItemsForClass(uid);
  }
}
