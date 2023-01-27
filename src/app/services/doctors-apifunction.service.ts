import { HttpClient } from '@angular/common/http';
import { Docrtor } from './../../models/Doctors';
import { ApifunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsApifunctionService extends ApifunctionService<Docrtor>{

  constructor( http:HttpClient) {
    super(http,"http://localhost:3000/Doctors")
  }
}
