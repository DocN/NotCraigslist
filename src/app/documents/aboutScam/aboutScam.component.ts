import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutScam',
  templateUrl: './aboutScam.component.html',
  styleUrls: ['./aboutScam.component.scss']
})
export class AboutScam implements OnInit {

  constructor(private router: Router, private http: HttpClient, private session: SessionsService) { }

  ngOnInit() {

  }

}
