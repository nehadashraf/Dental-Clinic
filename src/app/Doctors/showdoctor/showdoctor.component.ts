import { ActivatedRoute } from '@angular/router';
import { DoctorsApifunctionService } from './../../services/doctors-apifunction.service';
import { Docrtor } from './../../../models/Doctors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdoctor',
  templateUrl: './showdoctor.component.html',
  styleUrls: ['./showdoctor.component.css']
})
export class ShowdoctorComponent implements OnInit {

  doctor:Docrtor=new Docrtor();
  id;
  scoreCounter:number[];
    constructor(private srv:DoctorsApifunctionService,private activeRoute:ActivatedRoute) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.doctor=data;
      })
    }


  ngOnInit(): void {
  }

}
