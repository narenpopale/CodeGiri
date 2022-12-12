import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProblemsService } from 'src/app/services/problems.service';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.css']
})
export class ProblemPageComponent implements OnInit {

  Id !: string;
  problem !: any;
  CodeDesc !: FormGroup;


  constructor(private problemsService: ProblemsService, private activatedRoute: ActivatedRoute,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.Id = data['id'];
    })

    // console.log(this.Id);
    this.problemsService.getSpecificProblem(this.Id).subscribe((data) => {
      this.problem = data;
      console.log(this.problem);
    })

    this.CodeDesc = this.fb.group({
      cmd: ['', Validators.required],
      code: ['', Validators.required],
      input: ['', Validators.required],
      output: ['', Validators.required],
      youroutput: ['', Validators.required]
    })
  }


  compile(){
    // console.log(this.CodeDesc.value);
    this.problemsService.compile(this.CodeDesc.value).subscribe((data)=>{
      console.log(data);
    })
  }

  submit(){

  }
}
