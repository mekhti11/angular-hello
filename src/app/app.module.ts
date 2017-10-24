import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UsersComponent } from './users.component';
import { AnotherComponent } from './another/another.component'
import {UserService} from "./user.service";
import { MypipePipe } from './mypipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AnotherComponent,
    MypipePipe
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
