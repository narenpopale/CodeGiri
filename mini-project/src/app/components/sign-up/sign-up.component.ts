import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUp = this.fb.group({
    Username : ["", Validators.required],
    Email : ["", Validators.required],
    Password : ["", Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
