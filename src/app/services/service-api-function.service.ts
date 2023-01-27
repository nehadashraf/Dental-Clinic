import { Services } from './../../models/services';
import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiFunctionService extends ApifunctionService <Services> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/sevices");
   }
}
