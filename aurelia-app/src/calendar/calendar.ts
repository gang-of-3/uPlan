export class Calendar{
  dayNames: String[];
  monthNames: String[];
  calendar: String[][];
  monthName:String;
  activeYear: number;
  activeMonth:number;

  constructor(){
    this.dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    this.monthNames = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];
    var currentMonth = this.getCurrentMonth();
    var currentYear = this.getCurrentYear();

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
    this.activeMonth = month;
    this.activeYear = year;
    this.monthName = this.monthNames[month];
    this.calendar = this.buildMonth(month, year);
  }

  private buildMonth(month, year){

    var totalDaysInMonth = this.calculateTotalDaysInMonth(month, year);
    var firstWeekdayOfMonth = this.calculateFirstWeekdayOfMonth(month, year);
    var numWeeksInMonth = this.calculateNumberWeeksInMonth(totalDaysInMonth,firstWeekdayOfMonth);

    var i,j;
    var fullCalendar = [];
    var num = 1;
    for(i = 0; i< numWeeksInMonth;i++){
      fullCalendar.push(new Array(7));
      for(j=0; j<7; j++){
        if((i>0 && num <= totalDaysInMonth) || (i ===0 && j >= firstWeekdayOfMonth)){
            fullCalendar[i][j] = num;
            num++;
        }
      }
    }

    return fullCalendar;
  }

  private getCurrentYear(){
    var date = new Date();
    var currentYear = date.getFullYear();
    return currentYear;
  }

  private getCurrentMonth(){
    var date = new Date();
    var currentMonth = date.getMonth();
    return currentMonth;
  }

  private calculateNumberWeeksInMonth(totalDaysInMonth, firstWeekdayOfMonth){
    var numWeeksInMonth = Math.ceil((totalDaysInMonth - (7-firstWeekdayOfMonth))/7) + 1;

    return numWeeksInMonth;
  }

  private calculateTotalDaysInMonth(month, year){
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month+1);
    date.setDate(0);

    return date.getDate();
  }

  private calculateFirstWeekdayOfMonth(month, year){
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(1);

    return date.getDay();
  }
}
