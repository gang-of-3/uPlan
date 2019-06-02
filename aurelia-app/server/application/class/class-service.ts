import {ClassDao} from '../../entity/class/class-dao'

export class ClassService {

  classDao: ClassDao;

  constructor() {
    this.classDao = new ClassDao();
  }

  getClassItems(uid){
    return this.classDao.getItemsForClass(uid);
  }
}
