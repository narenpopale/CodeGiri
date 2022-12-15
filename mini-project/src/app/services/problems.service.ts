import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  url : string = "http://localhost:3000/problems";
  contest : string = "http://localhost:3000/contests";

  constructor(private http:HttpClient) { }

  getOldProblems(){
    return this.http.get<any>(`${this.url}/old`);
  }

  getNewProblems(){
    return this.http.get<any>(`${this.url}/new`);
  }

  getSpecificProblem(id:any){
    return this.http.get<any>(`${this.url}/old/${id}`);
  }

  getProblemsByCode(code:any){
    return this.http.get<any>(`${this.url}/problems/${code}`);
  }

  compile(data:any){
    return this.http.post<any>(`${this.url}/compile`,data);
  }

  submit(data:any){
    return this.http.post<any>(`${this.url}/submit`,data);
  }

  newProblem(data:any){
    return this.http.post<any>(`${this.url}/new`,data);
  }

  updateContestCode(id:any,code:any){
    return this.http.patch<any>(`${this.url}/problem/${id}`,code);
  }

  createNewContest(data:any){
    return this.http.post<any>(`${this.contest}`,data);
  }

}
