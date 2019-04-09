import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private storage: Storage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return new Observable((observer => {
    //   this.storage.get('user').then(user => {
    //     if (user) {
    //       req = req.clone({
    //         setHeaders: {
    //           Authorization: JSON.parse(user).token
    //         }
    //       });
    //     }
    //     observer.next(req);
    //   });
    // })).pipe(
    //   switchMap((_req: HttpRequest<any>) => next.handle(_req)),
    //   tap(event => {}, err => {
    //     if (err instanceof HttpErrorResponse && err.status === 401) {
    //       this.auth.logOut();
    //     }
    //   })
    // );
    return fromPromise(this.storage.get('user')).pipe(
      switchMap((user) => {
      if (user) {
        req = req.clone({
          setHeaders: {
            Authorization: JSON.parse(user).token
          }
        });
      }
      return next.handle(req);
    }),
    tap(event => {}, err => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        this.auth.logOut();
      }
    }));

  }
}
