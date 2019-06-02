import {CalendarItem} from "./calendar-item";

export class ItineraryService {
  events: CalendarItem[];

  constructor() {
    this.events = [];
  }

  removeItineraryItem(id: String) {
    this.events = this.events.filter((item) => {
      return item.id != id;
    });
  }

  addItineraryItem(item: CalendarItem) {
    this.events.push(item);
  }

  updateItineraryItem(item: CalendarItem) {
    var i =0;
    for(i;i<this.events.length;i++){
      if(item.id === this.events[i].id){
        this.events[i] = item;
      }
    }
  }

  setFullItinerary(events) {
    this.events = events;
  }

  findItinerary(year, month, day) {
    return this.events ? this.events.filter((item: CalendarItem) => {
      var dateTime: Date = new Date(item.dateTime);
      return dateTime.getFullYear() === year && dateTime.getMonth() === month && dateTime.getDate() === day;
    }) : [];
  }

}
