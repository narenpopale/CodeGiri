import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { IdeComponent } from './components/ide/ide.component';
import { CompeteComponent } from './components/compete/compete.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { Problem1Component } from './components/problem1/problem1.component';
import { Problem2Component } from './components/problem2/problem2.component';
import { Problem3Component } from './components/problem3/problem3.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    IdeComponent,
    CompeteComponent,
    ProblemsComponent,
    Problem1Component,
    Problem2Component,
    Problem3Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
