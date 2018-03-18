import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  //variables
  searchKey = '';
  //main categories data
  private mainCategoriesID;
  private mainCategoriesName; 
  
  //subcategories data
  private subcategories = new Array();
  private subCounter = '0';
  constructor(private router:Router, private http: HttpClient, private session:SessionsService) { }

  ngOnInit() {
    this.pullCategories();
  }

  onKey(event: any) { // without type info
    this.searchKey = event.target.value;
  }
  
  pullCategories() {
    let data = {};
    this.http.post('http://127.0.0.1/notcraigs/getCategories.php', data)
    .subscribe(
      (res) => {
        if(res.toString() != "") {
          this.mainCategoriesID = res['categoryID'];
          this.mainCategoriesName = res['categoryName'];
          for(let i = 0; i< this.mainCategoriesID.length; i++) {
            this.pullSubCategories(i);
          }
          console.log(res);
        }
      },
      err => {
        console.log(err);
        //finish loading
      }
    );
  }

  pullSubCategories(categoryID) {
    let data = {'categoryID' : categoryID};
    this.http.post('http://127.0.0.1/notcraigs/getSubCategories.php', data)
    .subscribe(
      (res) => {
        if(res.toString() != "") {
          var counter = this.subCounter;
          this.subcategories[counter] = res;
          this.subCounter = counter;
          console.log(res);
        }
      },
      err => {
        console.log(err);
        //finish loading
      }
    );
  }

}
