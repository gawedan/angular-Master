import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  users:any[]=[];

  constructor(dataService:DataServiceService) { 
    dataService.getUsers().subscribe(users => {
      this.users.push(users);
    });
  }

  ngOnInit() {
  }

}