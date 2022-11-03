import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeGiri';

  showSignUp : boolean = false;

  showSignUpPage() {
    this.showSignUp = true;
  }
  
  showLogin : boolean = false;
  
  showLoginPage() {
    this.showLogin = true;
  }

  showIde : boolean = false;

  showIdePage() {
    this.showIde = true;
  }

  showCompete : boolean = false;

  showCompetePage() {
    this.showCompete = true;
  }

  showProblems : boolean = false;

  showProblemsPage() {
    this.showProblems = true;
  }

  showContact : boolean = false;

  showContactPage() {
    this.showContact = true;
  }
}
