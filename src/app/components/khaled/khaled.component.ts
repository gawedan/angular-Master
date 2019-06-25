import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-khaled',
  templateUrl: './khaled.component.html',
  styleUrls: ['./khaled.component.css']
})
export class KhaledComponent implements OnInit {
  totalClass = {};
myClassCss = true;
myClassCss2 = true;
salary=4000;
birthday=new Date(1983,9,17);

  constructor() {
    this.classFunction();
  }
  ngOnInit() {}

  classFunction(){
    this.totalClass = {
    myClass:this.myClassCss,
    myClass2:this.myClassCss2
    }
  }
 }
