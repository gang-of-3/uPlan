import "datejs";

export class CalendarUtility{
  public buildMonth(month, year){
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

  public getCurrentYear(){
    var date = new Date();
    var currentYear = date.getFullYear();
    return currentYear;
  }

  public getCurrentMonth(){
    var date = new Date();
    var currentMonth = date.getMonth();
    return currentMonth;
  }

  private calculateNumberWeeksInMonth(totalDaysInMonth, firstWeekdayOfMonth){
    var numWeeksInMonth = Math.ceil((totalDaysInMonth - (7-firstWeekdayOfMonth))/7) + 1;

    return numWeeksInMonth;
  }

  private calculateTotalDaysInMonth(month, year){
    // @ts-ignore
    var numDays = Date.getDaysInMonth(year, month);

    return numDays;
  }

  private calculateFirstWeekdayOfMonth(month, year){
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(1);

    return date.getDay();
  }
}
