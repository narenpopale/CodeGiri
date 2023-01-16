import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : boolean = false;
  password : boolean = false;

  emailOrg : boolean = false;
  passwordOrg : boolean = false;

  Login = this.fb.group({
    Email : ["", Validators.required],
    Password : ["", Validators.required]
  })

  LoginOrg = this.fb.group({
    EmailOrg : ["", Validators.required],
    PasswordOrg : ["", Validators.required]
  })

  constructor(private fb: FormBuilder,private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.loginUser(this.Login.value)
      .subscribe((data) => {
        
        if(data == "Invalid Email") {
          this.email = true;
        }
        else if(data == "Invalid Password") {
          this.email = false;
          this.password = true;
        }
        else {
          console.log(data);
          this.router.navigateByUrl("/home");
          this.email = false;
          this.password = false;
          localStorage.setItem("token",data.token);
          localStorage.setItem("is_admin",data.is_admin);
        }
        
      })
    }
    
    onOrgSubmit(){
      this.userService.loginOrganizer(this.LoginOrg.value)
      .subscribe((data) => {
        
        if(data == "Invalid Email") {
          this.emailOrg = true;
        }
        else if(data == "Invalid Password") {
          this.emailOrg = false;
          this.passwordOrg = true;
        }
        else {
          console.log(data);
          this.router.navigateByUrl("/home");
          this.emailOrg = false;
          this.passwordOrg = false;
          localStorage.setItem("token",data.token);
          localStorage.setItem("is_admin",data.is_admin);
        }
        
      })
  }
}
