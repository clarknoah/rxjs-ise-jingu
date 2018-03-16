import { Component, OnInit, ElementRef } from '@angular/core';
import { OperatorsService } from '../operators.service';
import { Observable, BehaviorSubject } from 'rxjs';
import "rxjs/Rx";
@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  remoteString: Observable<string>;
  remoteStringLast: Observable<string>;
  remoteStringLastSub: any;
  clickCount$: Observable<any>;
  stringObs$: Observable<any>;
  clickCount: number = 0;

  constructor(private op:OperatorsService, private el:ElementRef) { }

  ngOnInit() {
    var button = this.el.nativeElement.querySelector("#clickCounter");
    var input = this.el.nativeElement.querySelector("#inputFilter");
    this.stringObs$ = Observable.fromEvent(input,'keyup');
    this.clickCount$ = Observable.fromEvent(button,'click');
    this.remoteStringLast = this.op.getRemoteStringLast();


    this.stringObs$
    .map(data=>data.target.value)
    .do(()=>console.log('Running DO Function'))
    .filter(
      data=>data === "abc")
    .subscribe(
      ()=>console.log("FIlter Value Found")
    );

    this.clickCount$.subscribe(
      data=>this.clickCount++
    );
  }

  getRemoteString(){
    this.remoteString = this.op.getRemoteString();
  }

  getRemoteStringLast(){
    this.remoteStringLastSub = this.remoteStringLast
    .subscribe((data)=>{console.log(data);})
    var testsub = this.remoteStringLast
    .subscribe((data)=>{console.log('TEST SUB Publish');})
  }



}
