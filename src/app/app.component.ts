import { Component } from '@angular/core';
import { SessionsService } from './sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
    this.session.reloadSession();
  }
  title = 'app';
}
