import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khaled',
  templateUrl: './khaled.component.html',
  styleUrls: ['./khaled.component.css']
})
export class KhaledComponent implements OnInit {
name:string = "Khaled";
lname:string = "Mohammad";
age:number = 4;
employee={name:"Khaled",lname:"Mohammad",age:36};
  constructor() { 
    this.name="Ahmed";
    this.changeName();
    this.changeAge();
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