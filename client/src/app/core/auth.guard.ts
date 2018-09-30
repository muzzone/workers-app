import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from "../common/models/user.model";

interface ActiveUser {
  user: User,
  token: string
}

@Injectable()
export class AuthGuard  implements CanActivate, CanActivateChild {

  user: ActiveUser | null;

  constructor(private authService: AuthService) {
    authService.getActiveUser().subscribe((user: ActiveUser) => {
      this.user = user;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!this.user
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!this.user
  }
}
