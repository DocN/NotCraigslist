import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


const appRoutes:Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: '',
    component: MainpageComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
