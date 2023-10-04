import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  url : string = "http://localhost:3000/contests"

  constructor(private http: HttpClient) { }

  getPresentContests(){
    return this.http.get<any>(`${this.url}/present`);
  }

  getUpcomingContests(){
    return this.http.get<any>(`${this.url}/upcoming`);
  }

  getPastContests(){
    return this.http.get<any>(`${this.url}/past`);
  }

  getContestbyCode(code:any){
    return this.http.get<any>(`${this.url}/${code}`);
  }
}
