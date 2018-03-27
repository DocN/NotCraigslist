import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpfawmenu',
  templateUrl: './helpfaq.component.html',
  styleUrls: ['./helpfaq.component.scss']
})
export class HelpfaqComponent implements OnInit {
  // variables
  searchKey = '';

  // main categories data
  private mainCategoriesID;
  private mainCategoriesName;

  // subcategories data
  private subcategories: any[] = [];
  private test;
  private subCounter = 0;
  allDataFetched = false;
  constructor(private router: Router, private http: HttpClient, private session: SessionsService) { }

  ngOnInit() {
    this.pullCategories();
  }

  onKey(event: any) { // without type info
    this.searchKey = event.target.value;
  }

  pullCategories() {
    const data = {};
    this.http.post('http://127.0.0.1/notcraigs/getCategoriesFaq.php', data)
    .subscribe(
      (res) => {
        if (res.toString() !== '') {
          this.mainCategoriesID = res['categoryID'];
          this.mainCategoriesName = res['categoryName'];
          for (let i = 0; i < this.mainCategoriesID.length; i++) {
            this.pullSubCategories(this.mainCategoriesID[i], this.mainCategoriesName[i]);
          }
          this.allDataFetched = true;
          console.log(this.subcategories);
        }
      },
      err => {
        console.log(err);
        // finish loading
      }
    );
  }

  pullSubCategories(categoryID, name) {
    const data = {'categoryID' : categoryID};
    this.http.post('http://127.0.0.1/notcraigs/getSubCategoriesFaq.php', data)
    .subscribe(
      (res) => {
        if (res.toString() !== '') {
          this.subcategories[name] = res;
        }
      },
      err => {
        console.log(err);
        // finish loading
      }
    );
  }
}
