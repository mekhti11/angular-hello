import { Component } from '@angular/core';

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
  users  = ["Mekhti","Babek"];
  getTitle(){
    return this.title;
  }
}
