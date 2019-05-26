export enum UserType{
  STUDENT="STUDENT", INSTRUCTOR="INSTRUCTOR"
}

export class UserDetails {
  name: string;
  type: UserType;

  constructor(name: string, type:UserType) {
    this.name = name;
    this.type = type;
  }
}
