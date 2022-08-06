import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginDataBehaviorService } from '../services/login-data-behavior.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router:Router,
    private loginDataBehaviorService:LoginDataBehaviorService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      const currentUser = this.authService.currentUserValue;
      if (currentUser && currentUser.length>0) {
        
        this.loginDataBehaviorService.setLoginData(true);
          return true;
      }

      this.loginDataBehaviorService.setLoginData(false);
      alert("You can't access this page!!");
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
