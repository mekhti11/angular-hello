import { Component } from '@angular/core';
import {UserService} from './user.service'

@Component ({
  selector : 'newCmp',
  template : `
    <h2>{{getTitle()}}</h2>
    <ul>
      <li *ngFor="let user of users">
        {{user}}
      </li>
    </ul>
  `
})

export class UsersComponent{
  title = "Users";
  users;
  constructor(service : UserService){
    this.users = service.getNames();
  }

  getTitle(){
    return this.title;
  }
}
