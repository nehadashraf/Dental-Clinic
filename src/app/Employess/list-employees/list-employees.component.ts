import { EmployeesApiFunctionService } from './../../services/employees-api-function.service';
import { Employee } from './../../../models/Employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  allData:Employee[];
  empty=true;
    constructor(private srv:EmployeesApiFunctionService) {
      this.srv.get().subscribe((data:any)=>{
        if(data.length>0){
          this.allData=data;
          this.empty=false;
        }
        else{
          this.empty=true;
        }
      })
    }
    onDelete(id){
      if(confirm("Are You Sure?")){
        this.srv.delete(id).subscribe((data:any)=>{
          location.reload();
        })
      }
    }
  ngOnInit(): void {
  }

}
