import { Component, ElementRef , AfterViewInit} from '@angular/core';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import { DataService } from './data.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private el: ElementRef,
    private dataService: DataService,
    private router: Router){}

}
