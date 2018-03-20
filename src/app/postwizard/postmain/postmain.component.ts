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
  private currentCity;
  private currentState;

  //wizard1
  private mainCategoryID;
  private postingTypeID;
  private mainCategoriesName;

  //mainSelector
  private mainType = -1;

  //job
  private jobChoicesName; 
  private jobOfferedTypeID;
  private jobChoiceChecked = new Array();
  private jobPriceTotal;
  private activateJobPost = 0;

  //job final wizard page for collecting data
  private jobPostingTitle;
  private jobLocationTitle;
  private jobZipcodeTitle;
  private jobBodyDescription;
  private jobCheckedDirectContact = false;
  private jobCheckedInternship = false;
  private jobCheckedNonprofit = false;
  private jobCheckedTelecommuting = false;
  private jobcompensationDescription;

  ngOnInit() {
    this.currentCity = this.session.returnCity();
    this.currentState = this.session.returnState();
    this.pullCategories();
    this.jobPriceTotal = 0.00;
  }

  pullCategories() {
    let data = {};
    this.http.post('http://127.0.0.1/notcraigs/wizard/getWizard1.php', data)
    .subscribe(
      (res) => {
        if(res.toString() != "") {
          this.mainCategoryID = res['mainCategoryID'];
          this.postingTypeID = res['postingTypeID']
          this.mainCategoriesName = res['postingName'];
          console.log(this.mainCategoriesName);
        }
      },
      err => {
        console.log(err);
        //finish loading
      }
    );
  }

  optionSelector($event) {
    var name = 'mainCategory';
    for(let i =0; i< this.mainCategoriesName.length; i++) {
      var compName = name + i;
      if(compName == $event.srcElement.id) {
        console.log(i);
        this.mainType = i;
      }
    }
    if(this.mainType == 0) {
      this.pulljobWizard1();
      console.log(this.mainCategoriesName[this.mainType]);
    }
  }

  //job shit
  pulljobWizard1() {
    let data = {};
    this.http.post('http://127.0.0.1/notcraigs/wizard/getWizardjob1.php', data)
    .subscribe(
      (res) => {
        if(res.toString() != "") {
          this.jobOfferedTypeID = res['jobOfferedTypeID'];
          this.jobChoicesName = res['jobName']
          console.log(this.jobChoicesName);
          //set nothing checked
          for(let i=0; i <this.jobChoicesName.length; i++) {
            this.jobChoiceChecked[i] = false;
          }
        }
      },
      err => {
        console.log(err);
        //finish loading
      }
    );    
  }

  checkedJobChoice($event) {
    //console.log($event);
    var id = $event.srcElement.id;
    var name = 'jobChoice';
    for(let i =0; i< this.jobChoiceChecked.length; i++) {
      var current = name + i;
      if(current == id) {
        if(this.jobChoiceChecked[i] == true) {
          console.log(this.jobChoicesName[i] + "off");
          this.jobChoiceChecked[i] = false;
          this.jobPriceTotal = this.jobPriceTotal - Number(15);
        }
        else {
          console.log(this.jobChoicesName[i] + "On");
          this.jobChoiceChecked[i] = true;
          this.jobPriceTotal = this.jobPriceTotal + Number(15);
        }
      }
    }
  }

  jobContinue($event) {
    //only if they actually selected something
    if(this.jobPriceTotal > 0) {
      this.activateJobPost = 1;
    }
  }

  setJobPostingTitle($event) {
    this.jobPostingTitle = $event;
    //console.log($event);
  }

  setJobLocationTitle($event) {
    this.jobLocationTitle = $event;
    //console.log($event);
  }

  setJobZipcodeTitle($event) {
    this.jobZipcodeTitle = $event;
    //console.log($event);
  }
  setJobBodyDescription($event) {
    this.jobBodyDescription = $event;
    console.log($event);
  }

  checkedDirectContact() {
    if(this.jobCheckedDirectContact == true) {
      this.jobCheckedDirectContact = false;
    }
    else {
      this.jobCheckedDirectContact = true;
    }
  }
  checkedInternship() {
    if(this.jobCheckedInternship == true) {
      this.jobCheckedInternship = false;
    }else {
      this.jobCheckedInternship = true;
    }
  }
  checkedNonProfit() {
    if(this.jobCheckedNonprofit == true) {
      this.jobCheckedNonprofit = false;
    }else {
      this.jobCheckedNonprofit = true;
    }  
  }

  checkTelecommuting() {
    if(this.jobCheckedTelecommuting == true) {
      this.jobCheckedTelecommuting = false;
    }else {
      this.jobCheckedTelecommuting = true;
    }     
  }
  setJobCompensation($event) {
    this.jobcompensationDescription = $event;
  }
}
