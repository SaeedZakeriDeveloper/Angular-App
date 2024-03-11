import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  currentUser :  string  | undefined = ""
  constructor(private router: Router, private authService: AuthService) {
  }

  
  public get isAuthenticated (){   //property get     //ye methodi hast ke vaghti to html az on estefade konim be tore modam dar ts fire mishavad.
      return this.authService.authenticate
  }


  ngOnInit(): void {
   this.currentUser = this.authService.user?.name    //agar this.authService.user peyda karde bod bad boro .name ejra kon
  }
  

  onLoginButtonClick() {
    this.router.navigate(['./login']);
  }


  onRegisterButtonClick() {
    this.router.navigate(['./register'])
  }

}
