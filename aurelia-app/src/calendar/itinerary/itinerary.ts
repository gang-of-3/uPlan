import {bindable, autoinject} from "aurelia-framework";
import {CalendarItem} from "./calendar-item";
import {ItineraryService} from "./itinerary-service";

@autoinject
export class Itinerary{
  @bindable day:number;
  @bindable month:number;
  @bindable year:number;

  constructor(private itineraryService:ItineraryService){

  }

  get getItinerary(){
    return this.itineraryService.findItinerary(this.year, this.month, this.day);
  }


}
