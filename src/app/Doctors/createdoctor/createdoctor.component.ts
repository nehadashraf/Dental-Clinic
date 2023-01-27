import { DoctorsApifunctionService } from './../../services/doctors-apifunction.service';
import { Router } from '@angular/router';
import { Docrtor } from './../../../models/Doctors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  ngOnInit(): void {
  }
  doctor:Docrtor=new Docrtor();
    constructor(private srv:DoctorsApifunctionService,private router:Router) {}
    onSubmit(){
      this.srv.post(this.doctor).subscribe(data=>{
        this.router.navigateByUrl("doctors");
      });
    }

}
