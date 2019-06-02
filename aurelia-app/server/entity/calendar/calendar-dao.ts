import {CalendarItem} from "./calendar-item";
import {EventType} from "./calendar-item";

export class CalendarDao {

  calendarItems: Array<CalendarItem>;


  constructor() {
    this.calendarItems = new Array<CalendarItem>();

    this.getTestCalendarItems();
  }

  getCalendarItems(uid) {

    // push to the filters service
    let userCalendarItems = [];
    for(let i=0; i < this.calendarItems.length; i++){
      if (this.calendarItems[i].uid == uid){
        userCalendarItems.push(this.calendarItems[i])
      }
    }

    return userCalendarItems;

  }

  editCalendarItem(c_item_in){
    for (let i = 0; i < this.calendarItems.length; i++){
      if (this.calendarItems[i].id == c_item_in.id) {
        this.calendarItems[i] = c_item_in;
      }
    }
  }

  addCalendarItem(c_item_in){
    this.calendarItems.push(c_item_in);
  }

  deleteCalendarItem(id) {
    for (let i=0; i< this.calendarItems.length; i++){
      if (this.calendarItems[i].id == id) {
        this.calendarItems.splice(i,1);
      }
    }
  }

  getTestCalendarItems(){
    const c_item1 = new CalendarItem(1, "12", "Example Assignment", "June 1, 2019 12:00:00", EventType.TEST, "Chew all the gum that you can find until you explode");
    const c_item2 = new CalendarItem(2, "12", "Other Assignment", "June 12, 2019 1:13:00", EventType.TEST, "More endpoints");
    const c_item3 = new CalendarItem(3, "12", "Other-er Assignment", "July 4, 2019 5:30:00", EventType.GROUP_MEETING, "Finish endpoints");
    const c_item4 = new CalendarItem(4, "12", "Type Assignment", "June 23, 2019 14:24:00", EventType.TEST, "Type and type");
    const c_item5 = new CalendarItem(5, "12", "That Assignment", "May 26, 2019 20:56:00", EventType.GROUP_MEETING, "More endpoints");
    const c_item6 = new CalendarItem(6, "12", "Sue's office hours", "June 7, 2019 16:45:00", EventType.OFFICE_HOURS, "Finish endpoints");
    const c_item7 = new CalendarItem(7, "13", "Sue's only assignment", "June 7, 2019 16:45:00", EventType.OFFICE_HOURS, "One lonely assignment");


    this.calendarItems.push(c_item1);
    this.calendarItems.push(c_item2);
    this.calendarItems.push(c_item3);
    this.calendarItems.push(c_item4);
    this.calendarItems.push(c_item5);
    this.calendarItems.push(c_item6);
    this.calendarItems.push(c_item7);

  }
}
