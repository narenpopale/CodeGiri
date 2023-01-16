import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  RegistrationConfirm : boolean = false;
  RegistrationConfirmOrg : boolean = false;

  signUp = this.fb.group({
    Name : ["", Validators.required],
    Email : ["", Validators.required],
    Mobile : ["", Validators.required], 
    Password : ["", Validators.required],
    Department : [""],
    YearofStudy : [""]
  })

  signUpOrg = this.fb.group({
    name : ["", Validators.required],
    email : ["", Validators.required],
    password : ["", Validators.required],
    department : [""],
    designation : [""]
  })

  constructor(private fb: FormBuilder,private userService: UserService,private router: Router) { } 

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.registerUser(this.signUp.value)
      .subscribe((data) => {
        console.log(data);
        if(data){
          this.RegistrationConfirm = true;
          this.router.navigateByUrl("/home");
          localStorage.setItem("token", data.token);
          localStorage.setItem("is_admin", data.is_admin);
        }
      })
    }
    
    onSubmitOrg(){
      this.userService.registerOrganizer(this.signUpOrg.value)
      .subscribe((data) => {
        console.log(data);
        if(data){
          this.RegistrationConfirmOrg = true;
          this.router.navigateByUrl("/home");
          localStorage.setItem("token", data.token);
          localStorage.setItem("is_admin", data.is_admin);
        }
      })
  }
}
