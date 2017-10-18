import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyNewComponent } from './new.component';
import { AnotherComponent } from './another/another.component'

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
