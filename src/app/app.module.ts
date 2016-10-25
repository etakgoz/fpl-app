import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routing }      from './app.routing';

import { AppComponent } from './app.component';
import { LiveTableComponent } from './live-table/live-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
