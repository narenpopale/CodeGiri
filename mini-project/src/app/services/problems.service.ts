import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  url : string = "http://localhost:3000/problems"

  constructor(private http:HttpClient) { }

  getOldProblems(){
    return this.http.get<any>(`${this.url}/old`);
  }

  getSpecificProblem(id:any){
    return this.http.get<any>(`${this.url}/old/${id}`);
  }

  compile(data:any){
    return this.http.post<any>(`${this.url}/compile`,data);
  }
}
