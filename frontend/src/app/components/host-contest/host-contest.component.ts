import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Problem } from 'src/app/model/problem';
import { ProblemsService } from 'src/app/services/problems.service';


@Component({
  selector: 'app-host-contest',
  templateUrl: './host-contest.component.html',
  styleUrls: ['./host-contest.component.css']
})
export class HostContestComponent implements OnInit {

  Contest !: FormGroup;
  submit : boolean = false;
  Problems: any[] = [];
  AddedProblems: any[] = [];

  constructor(private fb: FormBuilder, 
              private problemsService: ProblemsService,
              private router: Router) { }

  ngOnInit(): void {
    this.Contest = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      duration: ['', Validators.required],
      status: ['Upcoming', Validators.required]
    })

    this.problemsService.getNewProblems()
      .subscribe((data) => {
        this.Problems = data;
        // console.log(this.Problems[0].name);
      })
  }

  Add(i: any) {
    this.AddedProblems.push(this.Problems[i]);
    this.problemsService.updateContestCode(this.Problems[i]._id, this.Contest.value)
      .subscribe((data) => {
        console.log(data);
      })

  }

  Remove(i: any) {
    this.AddedProblems.splice(i, 1);
  }

  onSubmit() {
    this.problemsService.createNewContest(this.Contest.value)
      .subscribe({
        next: (data) => {
          console.log(data)
          this.submit = true;
        },
        error: (error) => {
          if(error instanceof HttpErrorResponse){
            if(error.status == 401){
              this.router.navigate(["/login"]);
            }
          }
        }
      })
  }

}
