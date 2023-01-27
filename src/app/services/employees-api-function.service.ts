import { Employee } from './../../models/Employees';
import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesApiFunctionService extends ApifunctionService<Employee>{

  constructor(http:HttpClient) {
super(http,"http://localhost:3000/Employees")
   }
}
