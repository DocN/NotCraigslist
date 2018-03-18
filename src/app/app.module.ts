import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginPortalComponent } from './login/login-portal/login-portal.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CalendarComponent } from './mainpage/calendar-test/calendar.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'login',
    component: LoginPortalComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPortalComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash:true}),
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
