import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { PatternsComponent } from './patterns/patterns.component';
import { HomeComponent } from './home/home.component';
import {OperatorsService} from './operators.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'classes', component:ClassesComponent},
  {path:'patterns', component:PatternsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    PatternsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [OperatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
