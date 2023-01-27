import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesApiFunctionService } from './../../services/employees-api-function.service';
import { Employee } from './../../../models/Employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {
  employee:Employee=new Employee;
  id;
    constructor(private srv:EmployeesApiFunctionService,private activeRoute:ActivatedRoute,private route:Router) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.employee=data;
      })
     }
     editData(){
      this.srv.edit(this.employee,this.id).subscribe(data=>{
        this.route.navigateByUrl("employees");
      })
     }
     ngOnInit(): void {
    }

}
