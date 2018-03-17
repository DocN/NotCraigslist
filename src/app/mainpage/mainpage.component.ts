import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  searchKey = '';
  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.searchKey = event.target.value;
  }

}
