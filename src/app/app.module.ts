import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginPortalComponent } from './login/login-portal/login-portal.component';


import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//sessions
import { SessionsService } from './sessions.service';
import { PostmainComponent } from './postwizard/postmain/postmain.component';
import { DashmainComponent } from './dashboard/dashmain/dashmain.component';
import { DashnavComponent } from './dashboard/dashnav/dashnav.component';
import { LogoutComponent } from './login/logout/logout.component';
import { DashpostingComponent } from './dashboard/dashposting/dashposting.component';
import { StandardnavbarComponent } from './standardnavbar/standardnavbar.component';

const appRoutes:Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'login',
    component: LoginPortalComponent,
  },
  {
    path: 'post',
    component: PostmainComponent
  },
  {
    path: 'dashboard',
    component: DashmainComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPortalComponent,
    PostmainComponent,
    DashmainComponent,
    DashnavComponent,
    LogoutComponent,
    DashpostingComponent,
    StandardnavbarComponent
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
  providers: [
    SessionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
