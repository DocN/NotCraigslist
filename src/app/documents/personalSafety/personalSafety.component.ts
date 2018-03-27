import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalSafety',
  templateUrl: './personalSafety.component.html',
  styleUrls: ['./personalSafety.component.scss']
})
export class PersonalSafety implements OnInit {

  constructor(private router: Router, private http: HttpClient, private session: SessionsService) { }

  ngOnInit() {

  }

}
