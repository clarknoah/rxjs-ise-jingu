# RxjsIseJingu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Checklist

1. Generate App
> `ng new rxjs-ise-jingu`
2. Import FormsModule, ReactiveFormsModule, and HttpModule, RouterModule, Routes into app.module
2. Create components:
> `ng g component home`
> `ng g component classes`
> `ng g component patterns`
> `ng service operators`
3. Setup Routing for **classes, patterns, and operators**
```javascript
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'patterns', component: PatternsComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'operators', component: OperatorsComponent}
];
```
```html
<ul>
  <li><a [routerLink]="['/classes']">Classes</a></li>
  <li><a [routerLink]="['/patterns']">Patterns</a></li>
</ul>
```
2. Create Component for **Classes**
5. Create a div which demonstrates the usage of an Observable which receives an array of subscribers
3. Create a div which demonstrates the usage of a Subject, and displays the value of that subject. (uses next() operator)
4. Create a div which demonstrates the usage of a BehaviorSubject
5. Component **patterns**
6. Create services **data**
6. Create a div which demonstrates using a Service to receive an Observable that displays text
7. Create a div which uses a Service which uses the .map function to parse the response object to text and display the value
8. Create a div which contains an input that is an observable, which runs a filter function for a series of characters
8. Create a div which receives an observable that uses the Operator services and runs publishLast.refCount()
9. Create a div which observes the number of clicks on a button and uses an operator to aggregate the number of clicks
10. Create a div which use an observable which uses the do() operator.
