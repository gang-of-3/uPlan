export class Calendar{
  dayNames: String[];
  monthNames: String[];
  month: String[][];
  monthName:String;
  year: String;

  constructor(){
    this.dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    this.monthNames = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];
    var currentMonth = this.getCurrentMonth();
    this.monthName = this.monthNames[currentMonth];
    this.month = this.buildMonth(currentMonth);
    this.year = this.getCurrentYear();
  }

  buildMonth(month){

    var totalDaysInMonth = this.calculateTotalDaysInMonth(month);
    var firstWeekdayOfMonth = this.calculateFirstWeekdayOfMonth(month);
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
    return currentYear.toString();
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

  private calculateTotalDaysInMonth(month){
    var date = new Date();
    date.setMonth(month+1);
    date.setDate(0);

    return date.getDate();
  }

  private calculateFirstWeekdayOfMonth(month){
    var date = new Date();
    date.setMonth(month);
    date.setDate(1);

    return date.getDay();
  }
}
