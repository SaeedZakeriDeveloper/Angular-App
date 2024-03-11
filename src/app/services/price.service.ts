import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrice } from '../interfaces/IPrice';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private httpClient : HttpClient) { }
  url : string = "http://localhost:3000"

  
  getAllList(): Observable<IPrice[]> {
    return this.httpClient.get<IPrice[]>(this.url  + '/prices')
  }

  getById(id : number): Observable<IPrice[]> {
    return this.httpClient.get<IPrice[]>(this.url  + '/prices/'   +  id)
  }

  add(price : IPrice): Observable<IPrice[]>{
    return this.httpClient.post<IPrice[]>(this.url  + '/prices' , price )
  }

  upDate(id : number , price:IPrice): Observable<IPrice[]>{
   return  this.httpClient.put<IPrice[]>(this.url  + '/prices/' + id  , price )
  }

  remove(id : number): Observable<IPrice>{
    return  this.httpClient.delete<IPrice>(this.url  + '/prices/' + id )
  }
}
