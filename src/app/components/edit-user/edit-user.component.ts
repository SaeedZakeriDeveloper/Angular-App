import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser: IUser | undefined;
  userId: number | undefined;
  constructor(private authService: AuthService, private userService: UsersService) { }


  ngOnInit(): void {
    this.currentUser = this.authService?.user
    this.userId = this.authService.user?.id
  }

  onSaveProfileEdit(namee: string, lastNamee: string, emaill: string, passwordd: string) {
    if (this.currentUser) {
      this.currentUser.name = namee;
      this.currentUser.lastName = lastNamee;
      this.currentUser.email = emaill;
      this.currentUser.password = passwordd;
    }

    if (this.userId && this.currentUser) {
      this.userService.upDate(this.userId , this.currentUser).subscribe((res) => {
          alert("Success")
      })
      
    }
    

  }




}



