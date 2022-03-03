import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard {
  constructor (private authService: AuthService, private router:Router) {}
  //TODO 6: Guard'lar, canActivate, canActivateChild interfaceleri
/*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.checkLogin()
      .then(
        (authenticated) => {
        if (authenticated) {
          return true
        } else {
          this.router.navigate(['/'])
          return false
        }
      })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
 */
}
