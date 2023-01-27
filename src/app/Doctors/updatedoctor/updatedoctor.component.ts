import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsApifunctionService } from './../../services/doctors-apifunction.service';
import { Docrtor } from './../../../models/Doctors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {

  doctor:Docrtor=new Docrtor;
  id;
    constructor(private srv:DoctorsApifunctionService,private activeRoute:ActivatedRoute,private route:Router) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.doctor=data;
      })
     }
     editData(){
      this.srv.edit(this.doctor,this.id).subscribe(data=>{
        this.route.navigateByUrl("doctors");
      })
     }
     ngOnInit(): void {
    }

}
