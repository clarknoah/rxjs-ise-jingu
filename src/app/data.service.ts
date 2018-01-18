import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getStringValue():Observable<any>{
    return this.http.request('http://jsonplaceholder.typicode.com/posts/1');

  }

  getStringValueMap():Observable<string>{
    return this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .do(()=>console.log("Calling get stringValue"))
    .map(
      data=>data.json().title
    );
  }
}
