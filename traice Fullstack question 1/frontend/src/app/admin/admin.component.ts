import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminUserData:any = { }
  constructor(private _auth : AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }
  adminUser() {
    this._auth.adminUser(this.adminUserData)
    .subscribe(
      res => console.log(res),
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status ==401){
            this._router.navigate(['/login'])

          }
        }
      }
    )
  }
 
}
