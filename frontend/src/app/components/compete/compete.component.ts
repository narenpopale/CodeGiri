import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ContestsService } from 'src/app/services/contests.service';

@Component({
  selector: 'app-compete',
  templateUrl: './compete.component.html',
  styleUrls: ['./compete.component.css']
})
export class CompeteComponent implements OnInit {
  displayedColumns1: string[] = ['code', 'name', 'startDate', 'duration'];
  dataSource1 !: MatTableDataSource<any>;
  displayedColumns2: string[] = ['code', 'name', 'startDate', 'duration'];
  dataSource2 !: MatTableDataSource<any>;
  displayedColumns3: string[] = ['code', 'name', 'startDate', 'duration'];
  dataSource3 !: MatTableDataSource<any>; 

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private contestService: ContestsService,private router: Router) { }

  ngOnInit(): void {
    this.contestService.getPresentContests().subscribe((data) => {
      this.dataSource1 = new MatTableDataSource(data);
      this.dataSource1.paginator = this.paginator;
      this.dataSource1.sort = this.sort;
      console.log(data);
    })

    this.contestService.getUpcomingContests().subscribe((data) => {
      this.dataSource2 = new MatTableDataSource(data);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sort;
      console.log(data);
    })

    this.contestService.getPastContests().subscribe((data) => {
      this.dataSource3 = new MatTableDataSource(data);
      this.dataSource3.paginator = this.paginator;
      this.dataSource3.sort = this.sort;
      console.log(data);
    })
  }


  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  applyFilter3(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();

    if (this.dataSource3.paginator) {
      this.dataSource3.paginator.firstPage();
    }
  }

  gotoContest(code:any){
    this.router.navigate(['contest-page',code]);
  }

}
