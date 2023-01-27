import { ServiceApiFunctionService } from './../../services/service-api-function.service';
import { Services } from './../../../models/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  allData:Services[];
  constructor(private srv:ServiceApiFunctionService) {
    this.srv.get().subscribe((data:any)=>{
      if(data.length>0){
        this.allData=data;
      }
    })
  }
ngOnInit(): void {
}

}
