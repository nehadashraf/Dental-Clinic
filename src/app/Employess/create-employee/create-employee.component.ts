import { Router } from '@angular/router';
import { EmployeesApiFunctionService } from './../../services/employees-api-function.service';
import { Employee } from './../../../models/Employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  ngOnInit(): void {
  }
  employee:Employee=new Employee();
    constructor(private srv:EmployeesApiFunctionService,private router:Router) {}
    onSubmit(){
      this.srv.post(this.employee).subscribe(data=>{
        this.router.navigateByUrl("employees");
      });
    }
}
