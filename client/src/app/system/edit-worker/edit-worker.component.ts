import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WorkersService} from "../../core/workers.service";
import {Worker} from "../../common/models/worker.model";

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  workerId: string;
  worker: Worker;

  constructor(private route: ActivatedRoute, private workersService: WorkersService) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('id');
    this.workersService.getById(this.workerId).subscribe((worker: Worker)  => {
      this.worker = worker
    })
  }

  onSubmit(worker) {
    console.log('edit worker', worker);
    this.workersService.update(worker, this.workerId).subscribe(res => {
      console.log('worker updated', res);
      // TODO notify and redirect
    })
  }
}
