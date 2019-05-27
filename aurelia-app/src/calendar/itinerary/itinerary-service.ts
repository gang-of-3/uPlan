import {CalendarItem} from "./calendar-item";

export class ItineraryService {
  events:CalendarItem[];

  constructor() {
    this.events = [];
  }

  addItineraryItem(item:CalendarItem){
    this.events.push(item);
  }

  setFullItinerary(events){
    this.events = events;
  }

  findItinerary( year, month, day){
    return this.events ? this.events.filter((item:CalendarItem) => {
      var dateTime:Date = item.dateTime;
      if(item.title == 'print') {
        console.log(dateTime);
      }
      return dateTime.getFullYear() === year && dateTime.getMonth() === month && dateTime.getDate() === day;
    }): [];
  }

}
