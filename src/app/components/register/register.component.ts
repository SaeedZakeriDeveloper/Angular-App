import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guard/register.guard';
import { IUser } from 'src/app/interfaces/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {
  constructor(private userService: UsersService, private router: Router) { }

  registerForm!: FormGroup<any>
  user: IUser = { id: 5, name: 'fatemeh', lastName: "golshan", email: "saeed.zakeri1364", password: "1234" }
  users: IUser[] = []

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "lastName": new FormControl(null),
      "email": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    })

  }

  onSubmit() {
    this.userService.getAllList().subscribe((res) => {
      this.users = res
      let Ids = this.users.map(x => x.id)
      let maxId = Math.max(...Ids)

      this.user.id = maxId + 1
      this.user.name = this.registerForm.value.name
      this.user.lastName = this.registerForm.value.lastName
      this.user.email = this.registerForm.value.email
      this.user.password = this.registerForm.value.password

      this.userService.add(this.user).subscribe((res) => {
        alert("success")
        this.router.navigate([''])

      })
    })

  }
  canDeactivate() {
    let name = this.registerForm.value.name
    let lastName = this.registerForm.value.lastName
    let email = this.registerForm.value.email
    let password = this.registerForm.value.password


    if (name || lastName || email || password) {
      if (confirm("do you wanna exit?")) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }

  }

}
