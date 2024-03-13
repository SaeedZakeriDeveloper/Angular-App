import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }

  url : string = "http://localhost:3000"

  

  getAllList(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url  + '/users')
  }

  getById(id : number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url  + '/users/'   +  id)
  }

  add(user : IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(this.url  + '/users' , user )
  }

  upDate(id : number , user:IUser): Observable<IUser>{
   return  this.httpClient.put<IUser>(this.url  + '/users/' + id  , user )
  }

  
  remove(id : number): Observable<boolean>{
    return  this.httpClient.delete<boolean>(this.url  + '/users/' + id )
  }



}
