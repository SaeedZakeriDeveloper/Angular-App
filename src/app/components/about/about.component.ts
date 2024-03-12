import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  currentUser : IUser  |  undefined
  constructor (private authService : AuthService , private router : Router) {}

  ngOnInit(): void {
     this.currentUser = this.authService?.user
  }
  

  onEditProfileUserEdit(){
    this.router.navigate(['./edit-user'])
  }



 }
