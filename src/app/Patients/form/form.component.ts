import { DoctorsApifunctionService } from './../../services/doctors-apifunction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsApifunctionService } from './../../services/patients-api-function.service';
import { Patients } from './../../../models/Patients';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  patient:Patients=new Patients();
  constructor(private srv:PatientsApifunctionService , private router:Router ) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.srv.post(this.patient).subscribe(data=>{
      this.router.navigateByUrl("patients");
    });
  }
  print(formStudent){
    console.log(formStudent);

  }
}
