export class Class{
  id:String;
  shortName:String;
  longName:String;
  students: Array<String>;


  constructor(id, shortName, longName) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.students = new Array<String>()
  }

  addStudent(uid){
    this.students.push(uid)
  }
}

