import { Component, ElementRef , AfterViewInit} from '@angular/core';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import { DataService } from '../data.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements AfterViewInit {
  title = 'app';
  dataServiceString: Observable<string>;
  dataServiceStringMap: Observable<string>;
  inputVar: ElementRef;
  stringObservableSubscribeArray: any = [];
  stringObservable:Observable<string>;
  stringSubject: Subject<string> = new Subject();
  stringSubjectDisplay: string = "";
  stringBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject('Frank');

  constructor(
    private el: ElementRef,
    private dataService: DataService,
    private router: Router){

    this.stringSubject.next('Leah');
    this.stringObservable = Observable.create(
      (source)=>{
          source.next('Hi Guys');
      }
    );
    this.stringObservable.subscribe(
      data=>console.log(`Subscriber: First Subscriber + ${data}`)
    )
  }

  ngAfterViewInit(){

    this.stringSubject = new Subject();
    this.stringBehaviorSubject.subscribe(
      data=>console.log(`stringSubject value: ${data}`)
    );

    this.stringSubject.subscribe(
      (data)=>{
        console.log(`StringSubject Value has Changed to: ${data}`);
        this.stringSubjectDisplay = data;
      }
    );
    var input  = this.el.nativeElement.querySelector('#inputVar');
    var observer = Observable.fromEvent(
      input, 'keyup'
    );
    observer
    .filter((data)=>{
        return input.value==='aaa';
    })
    .subscribe(
      (data)=>{
        console.log(input.value);
      }
    );
    console.log(input);
  }

  updateStringBehaviortSubject(value){
    console.log(`Input Value for StringSubject: ${value.value}`);
    this.stringBehaviorSubject.next(value.value);
  }
  updateStringSubject(value){
    console.log(`Input Value for StringBehaviorSubject: ${value.value}`);
    this.stringSubject.next(value.value);
  }
  initializeObservable(){
    for(var i in this.stringObservableSubscribeArray){
      var name = this.stringObservableSubscribeArray[i];
      this.stringObservable.subscribe(
        data=>console.log(`Subscriber: ${name} + ${data}`)
      )
    }
  //  this.stringObservable.next(value.value);
  }

  getString(){
    this.dataService.getStringValue()
      .subscribe(
        (data)=>{
          this.dataServiceString = data.json().title;
        }
      );
  }

  getStringMap(){
    this.dataServiceStringMap = this.dataService.getStringValueMap();
  }

  addSubscriberToObservable(value){
    console.log(`Adding Subscriber: ${value.value}`);
    this.stringObservableSubscribeArray.push(value.value);
    value.value = "";
    this.stringObservable.subscribe(
      data=>console.log()
    )

  }

}
