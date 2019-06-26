import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  users: any[];
  isEditMode: boolean = false;
  user = {
    id: 0,
    name: "",
    username: "",
    email: ""
  }

  constructor(public dataService: DataServiceService) {
    this.dataService.getPerson().subscribe(data => {
      this.users = data;
    })
  }

  ngOnInit() {
  }

  deleteItem(id) {
    this.dataService.deletePerson(id).subscribe(res => {
      this.users = this.users.filter(user => user.id != id);
    });
  }
  editItem(user) {
    this.isEditMode = true;
    this.user = user;
  }
  mySubmit() {
    if (this.isEditMode) {
      this.users = this.users.filter(user => user.id != this.user.id);
      this.dataService.editPerson(this.user).subscribe(user => {
        this.users.push(user);
      });
      this.isEditMode = false;

    } else {
      this.dataService.addPerson(this.user).subscribe(user => {
        this.users.push(user);
      });
      //  this.dataService.addPerson(this.user).subscribe(user => {this.users.unshift(user);});
    }
  }
}