import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProblemsService } from 'src/app/services/problems.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.css']
})
export class ProblemPageComponent implements OnInit {

  Id !: string;
  problem !: any;
  CodeDesc !: FormGroup;
  OutputData: any = "";
  testCaseLen: any;
  testCases: any = [];
  FinalAns : any = undefined;
  Data: any;


  constructor(private problemsService: ProblemsService, 
              private activatedRoute: ActivatedRoute, 
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.Id = data['id'];
    })
    // console.log(this.Id);
    this.problemsService.getSpecificProblem(this.Id).subscribe((data) => {
      this.problem = data;
      console.log(this.problem);
      this.testCaseLen = this.problem[0].testCases.length;
    })

    this.CodeDesc = this.fb.group({
      cmd: ['', Validators.required],
      code: ['', Validators.required],
      input: ['', Validators.required]
    })

  }


  compile() {
    console.log(this.CodeDesc.value);
    this.problemsService.compile(this.CodeDesc.value).subscribe({
      next: (data) => {
        console.log(data);
        this.OutputData = data;
      },
      error: (err) => {
        this.router.navigate(["/login"]);
      }
    })
    
  }

  submit() {

    this.testCases = [];
    console.log(this.testCases);

    for (let i = 0; i < this.testCaseLen; i++) {
      // const element = JSON.parse(this.problem[0].testCases[i]);
      const element = this.problem[0].testCases[i];
      // console.log(element);
      console.log(element.Input);
      console.log(element.Output);
      this.Data = {
        cmd: this.CodeDesc.value.cmd,
        code: this.CodeDesc.value.code,
        Input: element.Input,
        Output: element.Output
      }
      this.problemsService.submit(this.Data).subscribe({
        next: (data) => {
          console.log(data); 
          this.testCases.push(data); 
          // if (data == "Wrong Answer") {
          //   this.FinalAns = false;
          //   console.log(this.FinalAns); 
          // }
        },
        error: (err) => {
          if(err instanceof HttpErrorResponse){
            if(err.status == 401){
              this.router.navigate(["/login"]);
            }
          }
        }
      })
      
    }

  }

}
