import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  users: string[];

  constructor(public http: Http) {

  }

  public getPerson() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
  }
  public addPerson(user) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user).map(res => res.json());
  }
  public deletePerson(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id).map(res => res.json());
  }
  public editPerson(user){
     return this.http.put('https://jsonplaceholder.typicode.com/users/' + user.id , user).map(res => res.json());
  }
}