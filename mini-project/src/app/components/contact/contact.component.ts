import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contact = this.fb.group({
    Title : [""],
    Message : [""]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
