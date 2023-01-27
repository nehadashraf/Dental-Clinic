import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export class ApifunctionService<T> {

  constructor(public http:HttpClient, public configUrl :string) {}
  //get all data
  get():Observable<T>
  {
    return this.http.get<T>(this.configUrl);
  }
  //get one Student Only
  getById(name):Observable<T>
  {
    return this.http.get<T>(this.configUrl+`/${name}`);
  }
  //post new data
  post(model:T):Observable<T>
  {
    return this.http.post<T>(this.configUrl,model)
  }
  //delete one data by id
  delete(id){
    return this.http.delete(this.configUrl+ `/${id}`)
  }
  //edit
  edit(model:T,id):Observable<T>
  {
    return this.http.put<T>(this.configUrl+`/${id}`,model)
  }
}
