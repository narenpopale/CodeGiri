import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProblemsService } from 'src/app/services/problems.service';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IdeComponent implements OnInit {

  CodeDesc !: FormGroup;
  OutputData: any = "";

  constructor(private problemsService: ProblemsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.CodeDesc = this.fb.group({
      cmd: ['', Validators.required],
      code: ['', Validators.required],
      input: ['', Validators.required]
    })
  }

  compile() {
    console.log(this.CodeDesc.value);
    this.problemsService.compile(this.CodeDesc.value).subscribe((data) => {
      console.log(data);
      this.OutputData = data;
    })
  }

}
