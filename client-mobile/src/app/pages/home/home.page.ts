import { Component, OnDestroy, OnInit } from '@angular/core';
import { Worker } from '../../shared/models/worker.model';
import { WorkersService } from '../../core/workers.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private wSub: Subscription;

  workers: Worker[] = [];
  workersLength: number = 0;
  searchParams: object = {};
  paginationParams: object = {};

  constructor(
    private workersService: WorkersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(params = {}) {
    this.wSub = this.workersService.getAll(params).subscribe((response: any) => {
      this.workers = response.docs;
      this.workersLength = response.total;
    });
  }

  getParams() {
    return {...this.searchParams, ...this.paginationParams};
  }

  editWorker(id) {
    this.router.navigate(['/edit-worker/' + id]);
  }

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      this.workers = this.workers.filter(item => item._id !== id);
      this.workersLength --;
      // this.snotifyService.success('Deleted', {position: 'rightTop'});
    }, e => {
      // this.snotifyService.error('Something went wrong!', {position: 'rightTop'})
    });
  }

  search(form) {
    const params = {};
    Object.keys(form).forEach(i => {
      form[i] ? params[i] = form[i] : null;
    });
    this.searchParams = params;
    this.fetch(this.getParams());
    // this.paginator.firstPage();
  }

  ngOnDestroy() {
    this.wSub ? this.wSub.unsubscribe() : null;
  }

}
