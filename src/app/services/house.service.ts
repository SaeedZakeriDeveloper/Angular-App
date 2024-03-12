import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHouse } from '../interfaces/IHouse';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient : HttpClient) { }

  url : string = "http://localhost:3000"

  

  getAllList(): Observable<IHouse[]> {
    return this.httpClient.get<IHouse[]>(this.url  + '/houses')
  }

  getById(id : number): Observable<IHouse[]> {
    return this.httpClient.get<IHouse[]>(this.url  + '/houses/'   +  id)
  }

  add(house : IHouse): Observable<IHouse[]>{
    return this.httpClient.post<IHouse[]>(this.url  + '/houses' , house )
  }

  upDate(id : number , house:IHouse): Observable<IHouse[]>{
   return  this.httpClient.put<IHouse[]>(this.url  + '/houses/' + id  , house )
  }

  remove(id : number): Observable<IHouse>{
    return  this.httpClient.delete<IHouse>(this.url  + '/houses/' + id )
  }

}
