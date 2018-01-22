import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ClassesComponent } from './classes/classes.component';
import { OperatorsComponent } from './operators/operators.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'patterns', component: PatternsComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'operators', component: OperatorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatternsComponent,
    ClassesComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
