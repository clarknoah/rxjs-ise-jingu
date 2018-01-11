import { Component, ElementRef , AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  inputVar: ElementRef;

  constructor(private el: ElementRef){

  }

  ngAfterViewInit(){
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
}
