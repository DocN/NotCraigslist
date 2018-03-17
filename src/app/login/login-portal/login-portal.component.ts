import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  //credentials array
  private model: any = {};
  private username;
  private password;
  warningMessage = '';

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    console.log("init login");
    var username = this.model.username;
    var password = this.model.password;

    //encrypt password with SHA1
    var encryptionKey = crypto.SHA1(password);

    console.log(encryptionKey.toString());
    //store data for transport
    let data = {'epassword': encryptionKey.toString(), 'userName': username, 'userId': 1};
    this.http.post('http://127.0.0.1/meme/login.php', data)
      .subscribe(
        (res) => {
          if(res.toString() != "") {
            //check the userID first and see if the credentials are valid.
            var userID = res['userID'];
            console.log(userID);
            //when the userID is null it means the credentials are invalid.
            if(userID == null) {
              this.warningMessage = 'Invalid username or password';
              //this.spinnerService.hide();
              return;
            }
            console.log(res);
            //store session data
            //this.session.loginSession(res);
            var element = document.getElementById("warning");
            element.style.color = "green";
            //finish loading release load spinner
            this.warningMessage = "Success!";
            //this.router.navigate(['/login']);
          }
        },
        err => {
          console.log(err);
          //finish loading
        }
      );

  }

}
