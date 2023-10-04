import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:3000/user";
  urlOrg: string = "http://localhost:3000/organizer";

  constructor(private http: HttpClient,
              private router: Router) { }

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

  loggedIn(){
    return !!localStorage.getItem("token");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  loggedOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("is_admin");
    this.router.navigate(["/home"]);
  }

  getAdminInfo(){
    let is_admin = localStorage.getItem("is_admin");
    if(is_admin == '1') return true;
    else return false;
  }

}
