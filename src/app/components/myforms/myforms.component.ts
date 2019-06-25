import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent implements OnInit {
lname:string = "";
name:string = "";
age:number = 0;
user={name: "", lname: "", age: 20};
myShop:string[]=["Apple","Orange"];
verfiyForm= {};
  constructor() { }

  ngOnInit() {
  }
  mySubmit1({value, valid}){
if(valid){
  this.verfiyForm= value;
}else{
  this.verfiyForm ="Not valid";
}
  }
mySubmit(){
this.myShop.push(this.name);
this.name="";
}

}