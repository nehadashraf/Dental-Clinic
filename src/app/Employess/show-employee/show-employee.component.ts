import { ActivatedRoute } from '@angular/router';
import { EmployeesApiFunctionService } from './../../services/employees-api-function.service';
import { Employee } from './../../../models/Employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  id;
  scoreCounter:number[];
    constructor(private srv:EmployeesApiFunctionService,private activeRoute:ActivatedRoute) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.employee=data;
      })
    }



  ngOnInit(): void {
  }

}
