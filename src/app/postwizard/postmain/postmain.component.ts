import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';
import { RandomIdserviceService } from '../../random-idservice.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-postmain',
  templateUrl: './postmain.component.html',
  styleUrls: ['./postmain.component.scss']
})
export class PostmainComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private session:SessionsService, private idGen:RandomIdserviceService) { }
  private model: any = {};
  private currentCity;
  private currentState;
  private starurl = "assets/img/icon/darkstar.png";
  private starbool = 0;
  //listing post id
  private postID;
  //image upload
  private images = new Array();
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
  private selectedJobsList = new Array();
  private jobPriceTotal;
  private activateJobPost = 0;

  //job final wizard page for collecting data
  private jobPostingTitle = '';
  private jobLocationTitle = '';
  private jobZipcodeTitle = '';
  private jobBodyDescription = '';
  private jobCheckedDirectContact = 0;
  private jobCheckedInternship = 0;
  private jobCheckedNonprofit = 0;
  private jobCheckedTelecommuting = 0;
  private jobcompensationDescription = '';
  private jobCompanyName = '';
  private employmentType = "fulltime";

  //contact info post
  private email1;
  private email2;
  private emailRadioChoice = 1;
  private phoneNumber;
  private postExtension;
  private postContactName;
  private byphoneVal = 0;
  private byTextVal = 0;
  private warningString = new Array();
  

  private postCheckDisabled = false;

  private currentImage = '';
  ngOnInit() {
    this.currentCity = this.session.returnCity();
    this.currentState = this.session.returnState();
    this.pullCategories();
    this.jobPriceTotal = 0.00;
    this.postID = this.idGen.randomGenerate();
    console.log(this.postID);
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
          this.selectedJobsList.splice(this.selectedJobsList.indexOf(this.jobChoicesName[i]), 1);
          this.jobPriceTotal = this.jobPriceTotal - Number(15);
        }
        else {
          console.log(this.jobChoicesName[i] + "On");
          this.jobChoiceChecked[i] = true;
          this.selectedJobsList.push(this.jobChoicesName[i]);
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
    if(this.jobCheckedDirectContact == 1) {
      this.jobCheckedDirectContact = 0;
    }
    else {
      this.jobCheckedDirectContact = 1;
    }
  }
  checkedInternship() {
    if(this.jobCheckedInternship == 1) {
      this.jobCheckedInternship = 0;
    }else {
      this.jobCheckedInternship = 1;
    }
  }
  checkedNonProfit() {
    if(this.jobCheckedNonprofit == 1) {
      this.jobCheckedNonprofit = 0;
    }else {
      this.jobCheckedNonprofit = 1;
    }  
  }

  checkTelecommuting() {
    if(this.jobCheckedTelecommuting == 1) {
      this.jobCheckedTelecommuting = 0;
    }else {
      this.jobCheckedTelecommuting = 1;
    }     
  }
  setJobCompensation($event) {
    this.jobcompensationDescription = $event;
  }

  setEmail1($event) {
    this.email1 = $event;
  }
  setEmail2($event) {
    this.email2 = $event;
  }
  setJobCompanyName($event) {
    this.jobCompanyName = $event;
  }

  setPostPhoneNumber($event) {
    this.phoneNumber = $event;
  }

  setPostExtension($event) {
    this.postExtension = $event;
  }

  setPostContactName($event) {
    this.postContactName = $event;
  }

  /*
  enable disable post field checking
  */
  checkDisabled($event) {
    if(this.postCheckDisabled == true) {
      this.postCheckDisabled = false;
    }
    else {
      this.postCheckDisabled = true;
    }
  }

  checkedByPhone() {
    if(this.byphoneVal == 1) {
      this.byphoneVal = 0;
    }
    else {
      this.byphoneVal = 1;
    }
  }

  checkedByText() {
    if(this.byTextVal == 1) {
      this.byTextVal = 0;
    }
    else {
      this.byTextVal = 1;
    }   
  }

  setEmployType($event) {
    this.employmentType = $event.srcElement.value;
  }

  checkAllValidJob() {
    var valid = true;
    this.warningString = new Array();
    let i = 0;
    if(this.checkDefined(this.email1) == false) {
      this.warningString[i] = "please enter an email \n ";
      i++;
      valid=false;
    }
    if(this.checkDefined(this.postContactName) == false) {
      this.warningString[i] = "please enter a contact name \n ";
      i++;
      console.log(5);
      valid=false;
    }
    if(this.checkDefined(this.jobPostingTitle) == false) {
      this.warningString[i] = "please enter a job title \n ";
      i++;
      valid=false;
    }
    if(this.checkDefined(this.jobLocationTitle) == false) {
      this.warningString[i] = "please enter a job location  \n ";
      i++;
      valid=false;
    }
    if(this.checkDefined(this.jobZipcodeTitle) == false) {
      this.warningString[i] = "please enter a zip code \n ";
      i++;
      valid=false;
    }
    if(this.checkDefined(this.jobBodyDescription) == false) {
      this.warningString[i] = "please enter a job description  \n ";
      i++;
      valid=false;
    }
    if(this.checkDefined(this.jobCompanyName) == false) {
      this.warningString[i] = "please enter a company name \n ";
      i++;
      valid=false;
    }

    //disabled check
    valid = true;

    return valid;
  }

  checkDefined ($data) {
    if($data == undefined){
      return false;
    }
    else {
      if($data.length == 0) {
        return false;
      }
      return true;
    }
  }
  tryContinueJob($event) {
    if(this.checkAllValidJob() == true) {
      this.activateJobPost = 3;
    }
    else {
      window.scroll(0,0);
    }
  }

  emailChoice($event) {
    var choiceName1 = "emailChoice1";
    var choiceName2 = "emailChoice2";
    var choiceName3 = "emailChoice3";
    if($event.srcElement.id == choiceName1) {
      this.emailRadioChoice = 1;
    }
    else if($event.srcElement.id == choiceName2) {
      this.emailRadioChoice = 2;
    }
    else if($event.srcElement.id == choiceName3) {
      this.emailRadioChoice = 3;
    }
    console.log(this.emailRadioChoice);
  }

  switchToImage() {
    this.activateJobPost = 3;
  }

  uploadAnImage($event) {
    if(this.images.length >= 24) {
      return;
    }
    console.log($event);
    var file = $event.target.files[0];

    let formData = new FormData();
      formData.append('file', file);
    
    this.http.post('http://127.0.0.1/notcraigs/upload.php',formData)
    .subscribe(
      (res) => {
        if(res.toString() != "") {
          console.log(res);
          if(res['result'] == true) {
            this.images.push(res['url']);
            this.currentImage = this.images[0];
          }
        }
      },
      err => {
        console.log(err);
        //finish loading
      }
    );
  }

  removeImageFromList($event) {
    console.log($event);
    for(let i =0; i < this.images.length; i++) {
      var imageName = "xclosedImage" + i;
      if(imageName == $event.srcElement.id) {
        this.images.splice((i),1);
        break;
      }
    }
  }

  doneImageNext() {
    this.submitJobPost();
    this.submitImages();
    this.activateJobPost = 4;
  }


  /*
    //listing post id
    private postID;
    //image upload
    private images = new Array();
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
    private jobCompanyName;
    private employmentType = "fulltime";
  
    //contact info post
    private email1;
    private email2;
    private emailRadioChoice = 1;
    private phoneNumber;
    private postExtension;
    private postContactName;
    private byphoneVal = false;
    private byTextVal = false;
    private warningString = new Array();
*/
  submitJobPost() {
    console.log(this.session.returnUserID());
    for(let i =0; i < this.jobChoiceChecked.length; i++) {
      if(this.jobChoiceChecked[i] == true) {
        let data = {'jobTypeID':i,'userID':this.session.returnUserID(),'postID':this.postID, 'mainCategoryID':this.mainType, 'jobPriceTotal':this.jobPriceTotal, 'jobPostingTitle':this.jobPostingTitle, 'jobLocationTitle':this.jobLocationTitle, 
        'jobZipcodeTitle':this.jobZipcodeTitle, 'jobBodyDescription':this.jobBodyDescription, 'jobCheckedDirectContact':this.jobCheckedDirectContact, 'jobCheckedInternship':this.jobCheckedInternship, 'jobCheckedNonprofit':this.jobCheckedNonprofit, 
        'jobCheckedTelecommuting':this.jobCheckedTelecommuting, 'jobcompensationDescription':this.jobcompensationDescription, 'jobCompanyName':this.jobCompanyName, 'employmentType':this.employmentType, 'email1':this.email1, 'email2':this.email2, 
      'emailRadioChoice':this.emailRadioChoice, 'phoneNumber':this.phoneNumber, 'postExtension':this.postExtension, 'postContactName':this.postContactName, 'byphoneVal':this.byphoneVal, 'byTextVal':this.byTextVal, 'currentCity':this.currentCity};
        this.http.post('http://127.0.0.1/notcraigs/wizard/listJob/createListing.php', data)
        .subscribe(
          (res) => {
            console.log("here mofo");
          },
          err => {
            console.log(err);
            //finish loading
          }
        );   
      }

    }
  }

  submitImages() {
    for(let i =0; i < this.images.length; i++) {
      let data = {'postID':this.postID, 'imageURL':this.images[i], 'imageNumber':i };
      this.http.post('http://127.0.0.1/notcraigs/wizard/listJob/insertImages.php', data)
      .subscribe(
        (res) => {
          console.log("here mofo");
        },
        err => {
          console.log(err);
          //finish loading
        }
      );  
    }
  }

  starChanger() {
    if(this.starbool == 0) {
      this.starurl = "assets/img/icon/goldstar.png";
      this.starbool = 1;
    }
    else {
      this.starurl = "assets/img/icon/darkstar.png";
      this.starbool = 0;
    }
  }

  changeImage($event) {
    
    var index = -1;
    for(let i =0; i < this.images.length; i++) {
      var imageName = "imgIcon" + i;
      if(imageName == $event.srcElement.id) {
        index = i;
        break;
      }
    }
    if(index != -1) {
      this.currentImage = this.images[index];
    }
  }
  editImage() {
    this.mainType = 0;
    this.activateJobPost = 3;
  }

  editPost() {
    this.mainType = 0;
    this.activateJobPost = 1;
  }

  activateListing() {
    let data = {'postID':this.postID};
    this.http.post('http://127.0.0.1/notcraigs/wizard/listJob/activateListing.php', data)
    .subscribe(
      (res) => {
        console.log("posted!");
      },
      err => {
        console.log(err);
        //finish loading
      }
    );
  }
}
