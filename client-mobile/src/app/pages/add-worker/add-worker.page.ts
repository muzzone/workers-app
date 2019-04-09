import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../core/workers.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.page.html',
  styleUrls: ['./add-worker.page.scss'],
})
export class AddWorkerPage implements OnInit {

  constructor(private workersService: WorkersService, public toastController: ToastController) { }

  ngOnInit() {
  }

  addWorker(worker) {
    this.workersService.addNew(worker).subscribe(res => {
      this.toastController.create({
        message: 'Worker added',
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

}
