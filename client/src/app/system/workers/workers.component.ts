import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {WorkersService} from "../../core/workers.service";
import {Router} from "@angular/router";
import {Worker} from "../../common/models/worker.model";
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, OnDestroy {

  workers: Worker[] = [];
  displayedColumns: string[] = ['name', 'gender', 'contactInformation', 'date', 'salary', 'position', 'actions'];
  wSub: Subscription;
  pageEvent: PageEvent;
  workersLength: number = 0;
  searchParams: object = {};
  paginationParams: object = {};

  constructor(private workersService: WorkersService, private router: Router) { }

  ngOnInit() {
    this.fetch()
  }

  fetch(params = {}) {
    console.log('fetch', params);
    this.wSub = this.workersService.getAll(params).subscribe((response: any) => {
      console.log(response);
      this.workers = response.docs;
      this.workersLength = response.total
    });
  }

  getParams() {
    return {...this.searchParams, ...this.paginationParams}
  }

  pagination(event) {
    this.paginationParams = {
      page: event.pageIndex + 1,
      limit: event.pageSize
    };
    this.fetch(this.getParams());
  };

  editWorker(id) {
    this.router.navigate(['/edit-worker/' + id]);
  }

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      console.log('deleted', res);
      this.workers = this.workers.filter(item => item._id !== id);
      this.workersLength --;
      // TODO notify
    })
  }

  search(form) {
    const params = {};
    Object.keys(form).forEach(i => {
      form[i] ? params[i] = form[i] : null;
    });
    this.searchParams = params;
    this.fetch(this.getParams());
  }

  ngOnDestroy() {
    this.wSub ? this.wSub.unsubscribe() : null;
  }

}
