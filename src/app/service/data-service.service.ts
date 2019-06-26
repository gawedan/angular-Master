import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServiceService {

users:string[]; 
data:Observable<Array<string>>;
  
  constructor() {
  //  this.users = ['Khaled','Ahmed'];
   }
   public getUsers(){
     this.data=new Observable(observer =>{
setTimeout(() => {
  observer.next('Khaled');
},1000);
setTimeout(() => {
  observer.next('Ahmed');
},2000);
     });
     return this.data;
   }
}