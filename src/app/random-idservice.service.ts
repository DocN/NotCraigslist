import { Injectable } from '@angular/core';

@Injectable()
export class RandomIdserviceService {

  constructor() { }

  randomGenerate() {
    var randLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var randLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var randLetter3 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var randLetter4 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter1 + Date.now() + randLetter2 + randLetter3 + randLetter4;
    return uniqid;
  }
}
