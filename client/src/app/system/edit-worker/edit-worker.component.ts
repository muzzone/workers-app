import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WorkersService} from "../../core/workers.service";
import {Worker} from "../../shared/models/worker.model";
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  workerId: string;
  worker: Worker;

  constructor(
    private route: ActivatedRoute,
    private workersService: WorkersService,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('id');
    this.workersService.getById(this.workerId).subscribe((worker: Worker)  => {
      this.worker = worker
    }, e => {
      this.snotifyService.error(e.error.message, {position: 'rightTop'})
    })
  }

  onSubmit(worker) {
    this.workersService.update(worker, this.workerId).subscribe(res => {
      this.snotifyService.success('Worker updated', {position: 'rightTop'});
    },e => {
      this.snotifyService.error('Something went wrong!', {position: 'rightTop'})
    })
  }
}
