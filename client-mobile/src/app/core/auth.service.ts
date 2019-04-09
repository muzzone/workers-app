import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private activeUser = new ReplaySubject(1);
  private api = environment.API_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private toastService: ToastService
  ) {
    storage.get('user').then(user => {
      this.activeUser.next(JSON.parse(user));
    }).catch(e => {
      this.activeUser.next(null);
    });
  }

  signUp(data) {
    return this.http.post(this.api + 'register', data)
      .subscribe((res: any) => {
        if (res.user && res.token) {
          this.setActiveUser(res.user, res.token);
          this.router.navigate(['/']);
        }
      }, e => {
        this.toastService.error(e.error.message);
      });
  }

  logIn(data) {
    return this.http.post(this.api + 'login', data)
      .subscribe((res: any) => {
        if (res.user && res.token) {
          this.setActiveUser(res.user, res.token);
          this.router.navigate(['/']);
        }
      }, e => {
        this.toastService.error(e.error.message);
      });
  }

  setActiveUser(user, token) {
    const userData = {user, token};
    this.storage.set('user', JSON.stringify(userData)).then(data => {
      this.activeUser.next(userData);
    });
  }

  getActiveUser() {
    return this.activeUser.asObservable();
  }

  logOut() {
    this.storage.remove('user');
    this.activeUser.next(null);
    this.router.navigate(['/auth']);
  }
}
