import {CalendarItem} from "./itinerary/calendar-item";
import {autoinject, bindable, computedFrom} from "aurelia-framework";
import {CalendarUtility} from "./calendar-utility";
import {ExternalCallUtility} from "../shared/external-call-utility";
import {ExternalUrl} from "../shared/external-url";
import {ItineraryService} from "./itinerary/itinerary-service";
import {TodoInformation} from "../todo/todo-information";

@autoinject
export class Calendar{
  dayNames: String[];
  monthNames: String[];
  calendar: String[][];
  monthName:String;
  activeYear: number;
  activeMonth:number;
  newCalendarItem: CalendarItem;


  constructor(private calendarUtility:CalendarUtility, private externalCallUtility:ExternalCallUtility, private itineraryService:ItineraryService){
    this.newCalendarItem = new CalendarItem(0,"","","");
    this.dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.monthNames = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];
    var currentMonth = calendarUtility.getCurrentMonth();
    var currentYear = calendarUtility.getCurrentYear();

    this.setupCalendar(currentMonth, currentYear);
  }

  previousMonth(){
    var previousMonth = this.activeMonth - 1, previousYear = this.activeYear;
    if(this.activeMonth == 0){
      previousMonth = 11;
      previousYear -= 1;
    }

    this.setupCalendar(previousMonth, previousYear);
  }

  nextMonth(){
    var nextMonth = this.activeMonth + 1, nextYear = this.activeYear;
    if(this.activeMonth == 11){
      nextMonth = 0;
      nextYear += 1;
    }

    this.setupCalendar(nextMonth, nextYear);
  }



  setupCalendar(month, year){
    this.externalCallUtility.get(ExternalUrl.CALENDAR, year + '/' + month).then(data => {
      const events = data.content.calendarItems.map((item) => {
        return new CalendarItem(item.id, item.title, new Date(item.dateTime), item.description);
      });
      this.itineraryService.setFullItinerary(events);
    });
    this.activeMonth = month;
    this.activeYear = year;
    this.monthName = this.monthNames[month];
    this.calendar = this.calendarUtility.buildMonth(month, year);
  }

  addItem() {
    this.newCalendarItem = new CalendarItem(0,"","", "");
  }

}
