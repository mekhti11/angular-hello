import { Component } from '@angular/core';
import {UserService} from './user.service'

@Component ({
  selector : 'newCmp',
  template : `
    <h2>{{getTitle()}}</h2>
    <ul>
      <li *ngFor="let user of users">
        <button class="btn btn-success" [class.active]="isActive" style="margin : 3px" (click)=userClicked($event,user)>{{user}}</button>
      </li>
    </ul>
  `
})

export class UsersComponent{
  isActive : boolean = false;
  title = "Users";
  users;
  constructor(service : UserService){
    this.users = service.getNames();
  }

  getTitle(){
    return this.title;
  }

  userClicked($event,user){
    console.log(user," Clicked ",$event);
  }

}
