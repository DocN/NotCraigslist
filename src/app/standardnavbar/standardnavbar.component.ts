import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standardnavbar',
  templateUrl: './standardnavbar.component.html',
  styleUrls: ['./standardnavbar.component.scss']
})
export class StandardnavbarComponent implements OnInit {

  private username;
  private city;
  private loginstatus;
  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
    this.username = this.session.returnUsername();
    this.city = this.session.returnCity();
    this.loginstatus = this.session.getLoggedOn();
    this.session.sessUpdate.subscribe(value => {
      this.username = this.session.returnUsername();
      this.city = this.session.returnCity();
      this.loginstatus = this.session.getLoggedOn();
    });
  }

}
