import { ActivatedRoute } from '@angular/router';
import { ServiceApiFunctionService } from './../../services/service-api-function.service';
import { Services } from './../../../models/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent implements OnInit {

  service:Services=new Services();
  id;
    constructor(private srv:ServiceApiFunctionService,private activeRoute:ActivatedRoute) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.srv.getById(this.id).subscribe(data=>{
        this.service=data;
      })
     }
     ngOnInit(): void {
    }
}
