import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated: boolean | undefined = false
  subscription: Subscription[] = []
  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    this.subscription.push(this.authService.authSubject.subscribe((res: any) => {
      this.isAuthenticated = res.value
    }))
  }


  onLogoutButtonClick() {
    this.authService.logout()
  }

  
}
