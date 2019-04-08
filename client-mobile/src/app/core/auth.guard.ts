import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate, CanActivateChild {

  constructor(private router: Router, private storage: Storage) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.storage.get('user').then((user) => {
      if (!user) {
        this.router.navigate(['/auth']);
      }
      return !!user;
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.storage.get('user').then((user) => {
      if (!user) {
        this.router.navigate(['/auth']);
      }
      return !!user;
    });
  }
}
