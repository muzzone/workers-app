import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuthService} from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  currentUser;
  private api = environment.API_URL;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getActiveUser().subscribe(user => this.currentUser = user);
  }

  getAll(params: any = {}) {
    return this.http.get(
      this.api + 'workers',
      {params: new HttpParams({
          fromObject: params
        })}
    );
  }

  getGroups(params: any = {}) {
    return this.http.get(
      this.api + 'workers/groups',
      {params: new HttpParams({
          fromObject: params
        })}
    );
  }

  getById(id) {
    return this.http.get(this.api + 'workers/' + id);
  }

  addNew(worker) {
    return this.http.post(this.api + 'workers/', worker);
  }

  update(worker, id) {
    return this.http.put(this.api + 'workers/' + id, worker);
  }

  delete(id) {
    return this.http.delete(this.api + 'workers/delete/' + id);
  }
}
