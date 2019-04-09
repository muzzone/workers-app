import { Component, OnDestroy, OnInit } from '@angular/core';
import { Worker } from '../../shared/models/worker.model';
import { WorkersService } from '../../core/workers.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { ToastService } from '../../core/toast.service';

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
    private toastService: ToastService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(params = {}) {
    this.loadingController.create({
      spinner: 'circles',
      cssClass: 'custom',
    }).then(l => l.present());
    this.wSub = this.workersService.getAll(params).subscribe((response: any) => {
      this.workers = response.docs;
      this.workersLength = response.total;
      this.loadingController.dismiss();
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
      this.toastService.success('Deleted');
    }, e => {
      this.toastService.error(e.error.message);
    });
  }

  nextPage(event) {
    this.page ++;
    this.workersService.getAll(this.getParams()).subscribe((res: any) => {
        this.workers.push(...res.docs);
        event.target.complete();
        if (res.pages === res.page) {
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
