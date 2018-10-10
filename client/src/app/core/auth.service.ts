import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activeUser = new ReplaySubject(1);
  constructor(
    private http: HttpClient,
    private router: Router,
    private snotifyService: SnotifyService
  ) {
    const savedUser = localStorage.getItem('user');
    savedUser ? this.activeUser.next(JSON.parse(savedUser)) : this.activeUser.next(null);
  }

  signUp(data) {
    return this.http.post('/api/register', data)
      .subscribe((res: any) => {
        if (res.user && res.token) {
          this.setActiveUser(res.user, res.token);
          this.router.navigate(['/']);
        }
      }, e => {
        this.snotifyService.error(e.error.message, {position: 'rightTop'})
      })
  }

  logIn(data) {
    return this.http.post('/api/login', data)
      .subscribe((res: any) => {
        if (res.user && res.token) {
          this.setActiveUser(res.user, res.token);
          this.router.navigate(['/']);
        }
      }, e => {
        this.snotifyService.error(e.error.message, {position: 'rightTop'})
      });
  }

  setActiveUser(user, token) {
    const userData = {user, token};
    localStorage.setItem('user', JSON.stringify(userData));
    this.activeUser.next(userData);
  }

  getActiveUser() {
    return this.activeUser;
  }

  logOut() {
    localStorage.removeItem('user');
    this.activeUser.next(null);
    this.router.navigate(['/auth']);
  }
}
