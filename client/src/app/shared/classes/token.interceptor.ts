import {Injectable, OnInit} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import 'rxjs-compat'
import {Observable} from 'rxjs';

import {AuthService} from '../../core/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnInit {
  private user;
  constructor(private auth: AuthService) {
    this.auth.getActiveUser().subscribe(_user => {
      this.user = _user;
    })
  }

  ngOnInit() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.user) {
      req = req.clone({
        setHeaders: {
          Authorization: this.user.token
        }
      })
    }
    return next.handle(req).do(event => {}, err => {
      if (err instanceof HttpErrorResponse && err.status == 401) {
        this.auth.logOut();
      }
    });
  }
}
