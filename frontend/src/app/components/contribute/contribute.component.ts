import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestCase } from 'src/app/model/TestCase';
import { ProblemsService } from 'src/app/services/problems.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  Test = new TestCase();
  Problem !: FormGroup;
  testCase : TestCase[] = [];
  explanation : string[] = [];
  data !: any;
  submited : boolean = false;

  constructor(private problemsService: ProblemsService, 
              private fb: FormBuilder,
              private rotuer: Router) { }

  ngOnInit(): void {
    this.Problem = this.fb.group({
      name: ['', Validators.required],
      difficulty: ['', Validators.required],
      description: ['', Validators.required],
      inputFormat: ['', Validators.required],
      outputFormat: ['', Validators.required],
      constraints: ['', Validators.required],
      sampleInput: ['', Validators.required],
      sampleOutput: ['', Validators.required],
      explanation: ['', Validators.required]
    })

    this.Test = new TestCase;
    this.testCase.push(this.Test);
  }

  onSubmit() {
    console.log(this.Problem.value);
    console.log(this.testCase);
    this.data = {
      name: this.Problem.value.name,
      difficulty: this.Problem.value.difficulty,
      description: this.Problem.value.description,
      inputFormat: this.Problem.value.inputFormat,
      outputFormat: this.Problem.value.outputFormat,
      constraints: this.Problem.value.constraints,
      sampleInput: this.Problem.value.sampleInput,
      sampleOutput: this.Problem.value.sampleOutput,
      explanation: this.Problem.value.explanation,
      testCases: this.testCase
    }
    // console.log(this.data);
    this.problemsService.newProblem(this.data)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.submited = true;
        },
        error: (err) => {
          if(err instanceof HttpErrorResponse){
            if(err.status == 401){
              this.rotuer.navigate(["/login"]);
            }
          }
        }
      })    
  }

  Add(){
    this.Test = new TestCase;
    this.testCase.push(this.Test);
  }
  
  Remove(i : any){
    this.testCase.splice(i,1);
  }

}
