import { DoctorsApifunctionService } from './../../services/doctors-apifunction.service';
import { Docrtor } from './../../../models/Doctors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listdoctors',
  templateUrl: './listdoctors.component.html',
  styleUrls: ['./listdoctors.component.css']
})
export class ListdoctorsComponent implements OnInit {

  allData:Docrtor[];
  empty=true;
    constructor(private srv:DoctorsApifunctionService) {
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
