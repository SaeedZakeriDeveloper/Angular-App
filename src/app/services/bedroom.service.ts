import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBedroom } from '../interfaces/IBedroom';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BedroomService {
  
  constructor(private httpClient : HttpClient) { }
  url : string = "http://localhost:3000"

  
  getAllList(): Observable<IBedroom[]> {
    return this.httpClient.get<IBedroom[]>(this.url  + '/bedrooms')
  }

  getById(id : number): Observable<IBedroom[]> {
    return this.httpClient.get<IBedroom[]>(this.url  + '/bedrooms/'   +  id)
  }

  add(bedroom : IBedroom): Observable<IBedroom[]>{
    return this.httpClient.post<IBedroom[]>(this.url  + '/bedrooms' , bedroom )
  }

  upDate(id : number , bedroom:IBedroom): Observable<IBedroom[]>{
   return  this.httpClient.put<IBedroom[]>(this.url  + '/bedrooms/' + id  , bedroom )
  }

  remove(id : number): Observable<IBedroom>{
    return  this.httpClient.delete<IBedroom>(this.url  + '/bedrooms/' + id )
  }
}
