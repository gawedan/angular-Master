import { Component, OnInit } from '@angular/core';
import {Persons} from './Persons';
@Component({
  selector: 'app-khaled',
  templateUrl: './khaled.component.html',
  styleUrls: ['./khaled.component.css']
})
export class KhaledComponent implements OnInit {
  person:Persons;
  people:Persons[];
  constructor() {
    this.person={id:1,name:"khaled",lname:"Mohammad",age:36};
this.people=[
{id:1,name:"khaled",lname:"Mohammad",age:3},
{id:2,name:"Ahmed",lname:"Mohammad",age:4},
{id:3,name:"khaled",lname:"Mohammad",age:6},
{id:4,name:"Ahmed",lname:"Mohammad",age:34}
];
     }

  ngOnInit() {
  }
 }
