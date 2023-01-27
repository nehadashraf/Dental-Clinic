import { ActivatedRoute } from '@angular/router';
import { PatientsApifunctionService } from './../../services/patients-api-function.service';
import { Patients } from './../../../models/Patients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  patient:Patients=new Patients();
  id;
  scoreCounter:number[];
    constructor(private srv:PatientsApifunctionService,private activeRoute:ActivatedRoute) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.patient=data;
      })
    }

  ngOnInit(): void {
  }

}
