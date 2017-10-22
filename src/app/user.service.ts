import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  names;
  constructor() {
    this.names = ["Mekhti","Babek","Mert"];
  }

  getNames(){
    return this.names;
  }

}
