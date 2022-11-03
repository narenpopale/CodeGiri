import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Login = this.fb.group({
    Email : ["", Validators.required],
    Password : ["", Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
