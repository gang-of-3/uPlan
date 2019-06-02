import {CalendarItem, EventType} from "../../entity/calendar/calendar-item";

export class CalendarFilter {

  calendarItems: Array<CalendarItem>;


  constructor() {
    this.calendarItems = new Array<CalendarItem>();

  }

  filterCalendarItems(c_items: CalendarItem[], type: EventType) {

    // push to the filters service
    for (let i = 0; i < c_items.length; i++) {
      if (c_items[i].type == type) {
        this.calendarItems.push(c_items[i])
      }
    }

    return this.calendarItems;

  }
}
