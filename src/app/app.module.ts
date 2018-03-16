import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { PatternsComponent } from './patterns/patterns.component';
import { OperatorsService} from './operators.service';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'patterns', component:PatternsComponent},
  {path: 'classes',component:ClassesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    PatternsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OperatorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
