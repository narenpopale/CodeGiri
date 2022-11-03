import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Problem1Component } from './components/problem1/problem1.component';
import { Problem2Component } from './components/problem2/problem2.component';
import { Problem3Component } from './components/problem3/problem3.component';

const routes: Routes = [
  {path : "p1" , component : Problem1Component},
  {path : "p2" , component : Problem2Component},
  {path : "p3" , component : Problem3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
