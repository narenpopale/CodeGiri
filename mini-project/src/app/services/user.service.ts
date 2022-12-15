import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:3000/user";
  urlOrg: string = "http://localhost:3000/organizer";

  constructor(private http: HttpClient) { }

  registerUser(data:any){
    return this.http.post<any>(`${this.url}/register`,data);
  }
  
  registerOrganizer(data:any){
    return this.http.post<any>(`${this.urlOrg}/register`,data);
  }

  loginUser(data:any){
    return this.http.post<any>(`${this.url}/login`,data);
  }

  loginOrganizer(data:any){
    return this.http.post<any>(`${this.urlOrg}/login`,data);
  }
}
