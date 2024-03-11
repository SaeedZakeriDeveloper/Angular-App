import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { Subject } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | undefined
  authenticate: boolean | undefined = false

  public authSubject$ = new Subject()
  static authenticated: any;
  public get authSubject() {
    return this.authSubject$
  }

  constructor(private userService: UsersService) {
  }

  login(emaill: string, passwordd: string) {
    this.userService.getAllList().subscribe((res) => {
      this.user = res.find(x => x.email === emaill && x.password === passwordd)
      if (this.user) {
        this.authSubject$.next({
          value :  true ,
          event :  "login"
        }               
          )
        this.authenticate = true
      }
      else {
        this.authSubject$.next({
          value :  false ,
          event :  "login"
        })
        this.authenticate = false
      }
    })
  }

  logout() {
    this.authSubject$.next({
      value :  false ,
      event :  "logout"
    })
    this.authenticate = false
  }
}
