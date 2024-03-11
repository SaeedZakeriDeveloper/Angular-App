import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, UnsubscriptionError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,  OnDestroy{


  loginForm! : FormGroup
  constructor(private authService : AuthService  , private router :  Router){}
  subscription : Subscription []  = []
  


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email" : new FormControl (null  , Validators.required),
      "password" : new FormControl (null  , Validators.required)
    })  

    
    this.subscription.push(this.authService.authSubject.subscribe((res : any) => {
      if (res.value == true && res.event == "login") {        
         alert("Authenticated")
        this.router.navigate(['/'])    
      } else if (res.value == false && res.event == "login") {
         alert("Not authenticated")
      }    
    }))
  }

  ngOnDestroy(): void {
      this.subscription.forEach(sub => sub.unsubscribe())
  }
  
  onSubmit() { 
    this.authService.login(this.loginForm.value.email , this.loginForm.value.password)  
  }

}
