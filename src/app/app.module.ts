import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }      from './app.routing';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LiveTableComponent } from './live-table/live-table.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveTableComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDCRH6p4-QlwrDDSljm8ODHx_nX9Qc44Uw",
      authDomain: "fpl-test.firebaseapp.com",
      databaseURL: "https://fpl-test.firebaseio.com",
      storageBucket: "fpl-test.appspot.com"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
