import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class WorkersService {
  currentUser;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getActiveUser().subscribe(user => this.currentUser = user)
  };

  getAll() {
    return this.http.get('/api/workers/');
  };

  getById(id) {
    return this.http.get('/api/workers/' + id);
  }

  addNew(worker) {
    return this.http.post('/api/workers/', worker);
  }

  update(worker, id) {
    return this.http.put('/api/workers/' + id, worker)
  }

  delete(id) {
    return this.http.delete('/api/workers/delete/' + id);
  }
}
