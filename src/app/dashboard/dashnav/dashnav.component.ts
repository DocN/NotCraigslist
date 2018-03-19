import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.scss']
})
export class DashnavComponent implements OnInit {
  private username;
  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
    this.username = this.session.returnUsername();
    this.session.sessUpdate.subscribe(value => {
      this.username = this.session.returnUsername();
    });
  }

}
