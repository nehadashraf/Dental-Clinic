import { Patients } from './../../../models/Patients';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { Users } from './../../../models/users';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  ErrorMsg="";
  patient:Patients=new Patients();
  constructor(private srv:UsersService,private router:Router) {
   }
   login(){
    this.srv.get().subscribe((data:any)=>{
      let user=data.find(allData=>{
        return allData.name==this.name && allData.password==this.password ;
      })
    if(user){
  this.router.navigateByUrl(`home`);
}
    else{
        alert("YOU DON'T HAVE AN ACCOUNT Please,Sign UP First")
      }
})
   }
  ngOnInit(): void {
  }

}
