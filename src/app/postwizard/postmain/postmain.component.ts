import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postmain',
  templateUrl: './postmain.component.html',
  styleUrls: ['./postmain.component.scss']
})
export class PostmainComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
  }

}
