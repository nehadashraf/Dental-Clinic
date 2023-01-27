import { PatientsApifunctionService } from './../../services/patients-api-function.service';
import { Patients } from './../../../models/Patients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listpatients',
  templateUrl: './listpatients.component.html',
  styleUrls: ['./listpatients.component.css']
})
export class ListpatientsComponent implements OnInit {
  allData:Patients[];
  empty=true;
  constructor(private srv:PatientsApifunctionService) {
    this.srv.get().subscribe((data:any)=>{
      if (data.length>0) {
        this.allData=data;
        this.empty=false;
      }
      else{
        this.empty=true;
      }
    })
   }
   onDelete(id){
    if(confirm("Are you sure?"))
    {
      this.srv.delete(id).subscribe(data=>{
        location.reload();
        })
    }
  }
  ngOnInit(): void {
  }

}
