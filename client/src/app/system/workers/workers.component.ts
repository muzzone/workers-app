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

  constructor(private workersService: WorkersService, private router: Router) { }

  ngOnInit() {
    this.fetch()
  }

  fetch(params = {}) {
    this.wSub = this.workersService.getAll(params).subscribe((response: any) => {
      console.log(response);
      this.workers = response.docs;
      this.workersLength = response.total
    });
  }

  pagination(event) {
    const params = {
      page: event.pageIndex + 1,
      limit: event.pageSize
    };
    console.log(event);
    this.fetch(params)
  };


  editWorker(id) {
    this.router.navigate(['/edit-worker/' + id]);
  }

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      console.log('deleted', res);
      this.workers = this.workers.filter(item => item._id !== id)
      // TODO notify
    })
  }

  ngOnDestroy() {
    this.wSub ? this.wSub.unsubscribe() : null;
  }

}
