import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ContestsService } from 'src/app/services/contests.service';
import { ProblemsService } from 'src/app/services/problems.service';

@Component({
  selector: 'app-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: ['./contest-page.component.css']
})
export class ContestPageComponent implements OnInit {

  title !: string;
  
  displayedColumns: string[] = ['contestCode', 'name', 'difficulty', 'solve'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  code : any;

  constructor(private contestService: ContestsService, private problemsService: ProblemsService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.code = data['code'];
    })

    this.problemsService.getProblemsByCode(this.code).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })

    this.contestService.getContestbyCode(this.code).subscribe((data) => {
      this.title = data[0].name;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotoProblem(code:any){
    this.router.navigate(['problem-page',code]);
    // console.log(id);
  }

}
