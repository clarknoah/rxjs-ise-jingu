import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class OperatorsService {



  constructor(private http: Http) { }

  getRemoteString(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .map(data=>data.json().title);
  }

  getRemoteStringLast(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .do(()=>console.log("Running the publishLast"))
      .map(data=>data.json().title)
      .publishLast().refCount();
  }

}
