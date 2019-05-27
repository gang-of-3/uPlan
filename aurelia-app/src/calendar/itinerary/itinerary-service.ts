import {CalendarItem} from "./calendar-item";

export class ItineraryService {
  events:CalendarItem[];

  constructor() {
    this.events = [];
  }

  setFullItinerary(events){
    this.events = events;
  }

  findItinerary( year, month, day){
    return this.events ? this.events.filter((item:CalendarItem) => {
      var dateTime = item.getDate();
      return dateTime.getFullYear() === year && dateTime.getMonth() === month && dateTime.getDate() === day;
    }): [];
  }

}
