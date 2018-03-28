import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class Terms implements OnInit {

  constructor(private router: Router, private http: HttpClient, private session: SessionsService) { }

  ngOnInit() {

  }

}
