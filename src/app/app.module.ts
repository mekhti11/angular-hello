import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UsersComponent } from './users.component';
import { AnotherComponent } from './another/another.component'
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
