import {CalendarDao} from "../calendar/calendar-dao";
import {Class} from "./class";
import {CalendarItem, EventType} from "../calendar/calendar-item";

export class ClassDao {
  calendarDao: CalendarDao;
  classes: Array<Class>;

  constructor(calendarDao:CalendarDao) {
    this.calendarDao = calendarDao;
    this.classes = new Array<Class>();

    this.createClasses();
  }

  getItemsForClass(uid) {
    let classItems = [];
    let temp_class_items = [];
    for(let i=0; i < this.classes.length; i++){
      if (this.classes[i].students.includes(uid)){
        temp_class_items.push(this.calendarDao.getItemsFromClassId(this.classes[i].id, uid));
      }
    }
    if(temp_class_items[0] != undefined) {
      for (let i = 0; i < temp_class_items[0].length; i++){
        classItems.push(temp_class_items[0][i]);
      }
    }
    return classItems;
  }


  createClasses(){
    const class1 = new Class(11, "SE 577", "Software Architecture");
    const class2 = new Class(2, "OC", "Other Class");

    class1.addStudent('12');

    this.classes.push(class1);
    this.classes.push(class2);

  }
}
