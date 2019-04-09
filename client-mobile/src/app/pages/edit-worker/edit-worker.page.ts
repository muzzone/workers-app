import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersService } from '../../core/workers.service';
import { Worker } from '../../shared/models/worker.model';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.page.html',
  styleUrls: ['./edit-worker.page.scss'],
})
export class EditWorkerPage implements OnInit {
  workerId: string;
  worker: Worker;

  constructor(
    private route: ActivatedRoute,
    private workersService: WorkersService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('id');
    this.workersService.getById(this.workerId).subscribe((worker: Worker)  => {
      this.worker = worker;
    }, e => {
      this.toastService.error(e.error.message);
    });
  }

  updateInfo(worker) {
    this.workersService.update(worker, this.workerId).subscribe(res => {
      this.toastService.success('Worker updated');
    },e => {
      this.toastService.error(e.error.message);
    });
  }

}
