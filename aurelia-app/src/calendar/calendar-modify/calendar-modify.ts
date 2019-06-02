import {TodoInformation} from "../../todo/todo-information";
import {CalendarItem} from "../itinerary/calendar-item";
import {bindable, autoinject} from "aurelia-framework";
import {ExternalUrl} from "../../shared/external-url";
import {ExternalCallUtility} from "../../shared/external-call-utility";
import {ItineraryService} from "../itinerary/itinerary-service";
import {Class} from "./class";
import {UserInformationService} from "../../user/user-information-service";
import {UserInformation} from "../../user/user-information";

@autoinject
export class CalendarModify {
  @bindable calendarItem: CalendarItem;

  @bindable name: string;

  classes : Class[];

  isInstructor:boolean;

  constructor(private externalCallUtility: ExternalCallUtility, private itineraryService: ItineraryService, userInformationService: UserInformationService) {
    userInformationService.getUserInformation().then((information)=>{
      this.isInstructor = information.type === "INSTRUCTOR";
      if(this.isInstructor){
        this.externalCallUtility.get(ExternalUrl.CLASSES).then(((response)=>{
          this.classes = response.content.classes;
        }));
      }
    });
  }

  get canModify(){
    return (this.calendarItem.classId === "" || this.calendarItem.classId === undefined) || this.isInstructor;
  }

  isNew() {
    return this.calendarItem.id == "0";
  }

  delete(){
    this.externalCallUtility.delete(ExternalUrl.CALENDAR,this.calendarItem.id.toString()).then((()=>{
      this.itineraryService.removeItineraryItem(this.calendarItem.id);
    }));
  }

  submit() {
    //2 June 2019 06:00:00 EST
    var date = new Date(Date.parse(this.calendarItem.dateTime.toString()));
    var calendarItem = new CalendarItem(this.calendarItem.id, this.calendarItem.title, date, this.calendarItem.classId,this.calendarItem.description);
    if (this.isNew()) {
      this.externalCallUtility.post(ExternalUrl.CALENDAR, calendarItem).then((response) => {
        calendarItem.id = response.content.id;
        this.itineraryService.addItineraryItem(calendarItem);
      });
    }else{
      this.externalCallUtility.put(ExternalUrl.CALENDAR, calendarItem, calendarItem.id).then((response) => {
        this.itineraryService.updateItineraryItem(calendarItem);
      });
    }
  }
}
