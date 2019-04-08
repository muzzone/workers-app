import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate, CanActivateChild {

  user: any;

  constructor(private authService: AuthService, private router: Router) {
    authService.getActiveUser().subscribe((user: any) => {
      this.user = user;
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.user) {
      this.router.navigate(['/auth']);
    }
    return !!this.user;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.user) {
      this.router.navigate(['/auth']);
    }
    return !!this.user;
  }
}
