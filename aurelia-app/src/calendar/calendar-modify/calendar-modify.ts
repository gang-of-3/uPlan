import {TodoInformation} from "../../todo/todo-information";
import {CalendarItem} from "../itinerary/calendar-item";
import {bindable, autoinject} from "aurelia-framework";
import {ExternalUrl} from "../../shared/external-url";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ItineraryService} from "../itinerary/itinerary-service";

@autoinject
export class CalendarModify{
  @bindable calendarItem: CalendarItem;

  @bindable name:string;

  constructor(private externalCallUtility:ExternalCallUtility, private itineraryService: ItineraryService){

  }

  submit(){
    //28 May 2019 06:00:00 EST
    var date = new Date(Date.parse(this.calendarItem.dateTime.toString()));
    var calendarItem = new CalendarItem(this.calendarItem.id,this.calendarItem.title, date);

    this.externalCallUtility.post(ExternalUrl.CALENDAR, calendarItem).then((response) => {
      this.itineraryService.addItineraryItem(calendarItem);
    });
  }
}
