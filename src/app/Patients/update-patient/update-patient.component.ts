import { Patients } from './../../../models/Patients';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsApifunctionService } from './../../services/patients-api-function.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient:Patients=new Patients;
  id;
    constructor(private srv:PatientsApifunctionService,private activeRoute:ActivatedRoute,private route:Router) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.patient=data;
      })
     }
     editData(){
      this.srv.edit(this.patient,this.id).subscribe(data=>{
        this.route.navigateByUrl("patients");
      })
     }
     ngOnInit(): void {
    }


}
