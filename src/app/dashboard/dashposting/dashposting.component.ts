import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashposting',
  templateUrl: './dashposting.component.html',
  styleUrls: ['./dashposting.component.scss']
})
export class DashpostingComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
  }

}
