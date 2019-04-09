import { Component, OnDestroy, OnInit } from '@angular/core';
import { Worker } from '../../shared/models/worker.model';
import { WorkersService } from '../../core/workers.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';

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
  page: number = 1;

  constructor(
    private workersService: WorkersService,
    private router: Router,
    public toastController: ToastController,
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
    return {...this.searchParams, page: this.page};
  }

  editWorker(id) {
    this.router.navigate(['/edit-worker/' + id]);
  }

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      this.workers = this.workers.filter(item => item._id !== id);
      this.workersLength --;
      this.toastController.create({
        message: 'Deleted',
        duration: 3000,
        position: 'top'
      }).then(t => t.present());
    }, e => {
      this.toastController.create({
        message: e.error.message || 'Something went wrong!',
        duration: 3000,
        position: 'top'
      }).then(t => t.present());
    });
  }

  nextPage(event) {
    this.page ++;
    this.workersService.getAll(this.getParams()).subscribe((res: any) => {
      if (res.docs.length > 0) {
        this.workers.push(...res.docs);
        event.target.complete();
      } else {
        event.target.disabled = true;
      }
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
