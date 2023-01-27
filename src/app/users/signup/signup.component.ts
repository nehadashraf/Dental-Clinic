import { Users } from './../../../models/users';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { ApifunctionService } from './../../services/apifunction.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private serv:UsersService,private route:Router) { }
users=new Users;
  ngOnInit(): void {
  }
  onSubmit(){
    this.serv.post(this.users).subscribe(data=>{
      this.route.navigateByUrl("home")
    })
  }
  print(signUpForm){
    console.log(signUpForm);

  }
}
