import { Component, OnInit } from '@angular/core';
import {Persons} from './Persons';
@Component({
  selector: 'app-khaled',
  templateUrl: './khaled.component.html',
  styleUrls: ['./khaled.component.css']
})
export class KhaledComponent implements OnInit {
person:Persons;
isKhaled:boolean=true;
myName:String="Mohammad";
  constructor() {
    this.person = {id:1,name:"khaled",lname:"Mohammad",age:36};

     }

  ngOnInit() {
  }
 }
