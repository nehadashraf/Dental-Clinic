import { HttpClient } from '@angular/common/http';
import { Patients } from './../../models/Patients';
import { ApifunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class PatientsApifunctionService extends ApifunctionService<Patients>{

    constructor( http:HttpClient) {
      super(http,"http://localhost:3000/Patients")
    }
  }
