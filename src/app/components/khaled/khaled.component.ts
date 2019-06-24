import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khaled',
  templateUrl: './khaled.component.html',
  styleUrls: ['./khaled.component.css']
})
export class KhaledComponent implements OnInit {
name = "Khaled";
lname = "Mohammad";
age = 4;
adress:string[];
infos:[string,number,boolean];
employee={name:"Khaled",lname:"Mohammad",age:36};
  constructor() { 
    this.name="Ahmed";
    this.changeName();
    this.changeAge();
    this.adress=["langemarck","an der Gete","Syria"];
    this.infos=["khaled",2,true];
  }

  ngOnInit() {
    this.age=3;
  }
  changeName(){
    this.name="Ahmed";
  }
   changeAge(){
    this.employee.age=31;
  }
}