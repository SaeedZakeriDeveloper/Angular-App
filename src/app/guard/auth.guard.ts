import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { AuthService } from "../services/auth.service"



export  const AuthGuard : CanActivateFn = () => {
  const authService = inject (AuthService)
  let result = authService.authenticate
  if (result) {
    return true
  } else {
    alert("you are not authenticated")
    return false
  }
};
