import { Users } from './../../models/users';
import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApifunctionService<Users>{

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/users")
  }
}
