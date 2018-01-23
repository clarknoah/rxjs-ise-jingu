import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable} from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  subject: Subject<number> = new Subject();
  subjectValue = 0;
  behaviorSubject: BehaviorSubject<string> = new BehaviorSubject('Noah');
  behaviorSubjectLog: string[] = [];
  observable: Observable<number> = Observable.range(1,10);
  observedValue: number[] = [];


  constructor() {
    this.subject.subscribe(
      data=>console.log(`Subject Emitted Value: ${data}`)
    );

    this.behaviorSubject.subscribe(
      (data)=>{
        console.log(`BehaviorSubject Value: ${data}`);
        this.behaviorSubjectLog.push(data);
    }

    );
    console.log(this.behaviorSubject.value);
  }

  ngOnInit() {
  }

  subscribeToObservable(){
    var subscriber = this.observable.subscribe(
      (data)=>{
        console.log(`Subscriber Observed: ${data}`);
        this.observedValue.push(data);
        console.log(this.observedValue);
      }
    );
  }

  incrementSubjectValue(){
    this.subjectValue ++;
    this.subject.next(this.subjectValue);
  }

  appendBehaviorSubject(){
    var value = this.behaviorSubject.value + "_apend";
    this.behaviorSubject.next(value);

  }

}
