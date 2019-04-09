import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../core/workers.service';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.page.html',
  styleUrls: ['./add-worker.page.scss'],
})
export class AddWorkerPage implements OnInit {

  constructor(private workersService: WorkersService, private toastService: ToastService) { }

  ngOnInit() {
  }

  addWorker(worker) {
    this.workersService.addNew(worker).subscribe(res => {
      this.toastService.success('Worker added');
    }, e => {
      this.toastService.error(e.error.message);
    });
  }

}
