import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersService } from '../../core/workers.service';
import { ToastController } from '@ionic/angular';
import { Worker } from '../../shared/models/worker.model';

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
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('id');
    this.workersService.getById(this.workerId).subscribe((worker: Worker)  => {
      this.worker = worker;
    }, e => {
      this.toastController.create({
        message: e.error.message || 'Something went wrong!',
        duration: 3000,
        position: 'top'
      }).then(t => t.present());
    });
  }

  updateInfo(worker) {
    this.workersService.update(worker, this.workerId).subscribe(res => {
      this.toastController.create({
        message: 'Worker updated',
        duration: 3000,
        position: 'top'
      }).then(t => t.present());
    },e => {
      this.toastController.create({
        message: e.error.message || 'Something went wrong!',
        duration: 3000,
        position: 'top'
      }).then(t => t.present());
    });
  }

}
