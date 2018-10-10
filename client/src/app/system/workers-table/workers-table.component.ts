import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {Router} from "@angular/router";
import {SnotifyService} from 'ng-snotify';

import {WorkersService} from "../../core/workers.service";
import {Worker} from "../../shared/models/worker.model";

@Component({
  selector: 'app-workers',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})
export class WorkersTableComponent implements OnInit, OnDestroy {

  @ViewChild('paginator') paginator: any;

  workers: Worker[] = [];
  displayedColumns: string[] = ['name', 'contactInformation', 'salary', 'position', 'date', 'gender', 'actions'];
  workersLength: number = 0;
  searchParams: object = {};
  paginationParams: object = {};

  private wSub: Subscription;

  constructor(
    private workersService: WorkersService,
    private router: Router,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit() {
    this.fetch()
  }

  fetch(params = {}) {
    this.wSub = this.workersService.getAll(params).subscribe((response: any) => {
      this.workers = response.docs;
      this.workersLength = response.total
    });
  }

  getParams() {
    return {...this.searchParams, ...this.paginationParams}
  }

  pagination(paginator) {
    this.paginationParams = {
      page: paginator.pageIndex + 1,
      limit: paginator.pageSize
    };
    this.fetch(this.getParams());
  };

  editWorker(id) {
    this.router.navigate(['/edit-worker/' + id]);
  }

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      this.workers = this.workers.filter(item => item._id !== id);
      this.workersLength --;
      this.snotifyService.success('Deleted', {position: 'rightTop'});
    }, e => {
      this.snotifyService.error('Something went wrong!', {position: 'rightTop'})
    })
  }

  search(form) {
    const params = {};
    Object.keys(form).forEach(i => {
      form[i] ? params[i] = form[i] : null;
    });
    this.searchParams = params;
    this.fetch(this.getParams());
    this.paginator.firstPage();
  }

  ngOnDestroy() {
    this.wSub ? this.wSub.unsubscribe() : null;
  }

}
