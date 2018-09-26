import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {WorkersService} from "../../core/workers.service";
import {Router} from "@angular/router";
import {Worker} from "../../common/models/worker.model";


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, OnDestroy {

  workers: Worker[] = [];
  displayedColumns: string[] = ['name', 'gender', 'contactInformation', 'date', 'salary', 'position', 'actions'];
  offset = 0;
  limit = 5;
  wSub: Subscription;

  constructor(private workersService: WorkersService, private router: Router) { }

  ngOnInit() {
    this.fetch()
  }

  fetch() {
    const params = {
      offset: this.offset,
      limit: this.limit
    };

    this.wSub = this.workersService.getAll(params).subscribe((_workers: any) => {
      console.log(_workers);
      this.workers = _workers;
    });
  }

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
