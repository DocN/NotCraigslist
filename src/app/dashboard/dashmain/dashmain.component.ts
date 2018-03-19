import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashmain',
  templateUrl: './dashmain.component.html',
  styleUrls: ['./dashmain.component.scss']
})
export class DashmainComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
  }

}
