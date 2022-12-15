import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeteComponent } from './components/compete/compete.component';
import { ContestPageComponent } from './components/contest-page/contest-page.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { HomeComponent } from './components/home/home.component';
import { HostContestComponent } from './components/host-contest/host-contest.component';
import { IdeComponent } from './components/ide/ide.component';
import { LoginComponent } from './components/login/login.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path:"", redirectTo: "/home", pathMatch: "full" },
  { path:"home", component: HomeComponent },
  { path:"practice", component: ProblemsComponent },
  { path:"compete", component: CompeteComponent },
  { path:"problem-page/:id", component: ProblemPageComponent },
  { path:"contest-page/:code", component: ContestPageComponent },
  { path:"ide", component: IdeComponent },
  { path:"contribute", component: ContributeComponent },
  { path:"register", component: SignUpComponent },
  { path:"login", component: LoginComponent },
  { path:"host-contest", component: HostContestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
