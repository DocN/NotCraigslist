import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SessionsService {
  private currentSession;
  private loggedOn;
  private username;
  private userID;
  private authed;
  private balance;
  private avatarurl;
  private city = 'vancouver';
  public sessUpdate = new Subject<number>();

  constructor() { 
    this.loggedOn = 0;
  }

  //reload session from local machine
  reloadSession() {
    var savedSession = localStorage.getItem('activeSession');
    if(savedSession) {
      var jSavedSession = JSON.parse(savedSession);
      this.loginSession(jSavedSession);
    }
  }

  logoutSession() {
    this.currentSession = '';
    this.loggedOn = 0;
    this.username = '';
    this.userID = '';
    this.authed = 0;
    localStorage.setItem('activeSession', '');
    this.alertLoggedUpdate(this.loggedOn);
  }
  
  loginSession(data) {
    this.currentSession = data;
    this.username = this.currentSession['username'];
    this.userID = this.currentSession['userID'];
    this.balance = this.currentSession['balance'];
    this.avatarurl = this.currentSession['avatarurl'];
    this.authed = 1;
    this.loggedOn = 1;
    this.alertLoggedUpdate(this.loggedOn);
    //store session on local machine (need to write encrypt for this module)
    localStorage.setItem('activeSession', JSON.stringify(this.currentSession));
  }

  alertLoggedUpdate(logStatus) {
    this.sessUpdate.next(logStatus);
  }

  returnSession() {
    return this.currentSession;
  }
  returnUsername() {
    return this.username; 
  }
  returnUserID() {
    return this.userID;
  }
  returnBalance() {
    return this.balance;
  }
  returnAvatar() {
    return this.avatarurl;
  }
  returnCity() {
    return this.city;
  }
  checkLoginStatus() {
    return this.loggedOn;
  }

  getLoggedOn() {
    return this.loggedOn;
  }
}