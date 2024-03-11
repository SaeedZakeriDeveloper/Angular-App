import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export const registerGuard : CanDeactivateFn<CanComponentDeactivate>  = (
  component: CanComponentDeactivate , currentRoute: ActivatedRouteSnapshot , currentState: RouterStateSnapshot, nextState: RouterStateSnapshot
) => {
   return component.canDeactivate();
}