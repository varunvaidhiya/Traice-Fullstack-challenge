import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _adminUrl = "http://localhost:3000/api/admin"


  
  constructor(private http: HttpClient,
              private _router:Router) { }

  registerUser(user: any){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user: any){
    return this.http.post<any>(this._loginUrl,user)
  }

  adminUser(employeedetail: any){
    return this.http.post<any>(this._adminUrl,employeedetail)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/admin'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
