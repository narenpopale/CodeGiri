import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeteComponent } from './components/compete/compete.component';
import { HomeComponent } from './components/home/home.component';
import { IdeComponent } from './components/ide/ide.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemsComponent } from './components/problems/problems.component';

const routes: Routes = [
  { path:"", redirectTo: "/home", pathMatch: "full" },
  { path:"home", component: HomeComponent },
  { path:"practice", component: ProblemsComponent },
  { path:"compete", component: CompeteComponent },
  { path:"problem-page/:id", component: ProblemPageComponent },
  { path:"ide", component: IdeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
