import { Component, OnInit } from '@angular/core';
import {Worker} from "../../common/models/worker.model";
import {WorkersService} from "../../core/workers.service";

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  worker = new Worker('','','','','');

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
  }

  onSubmit(worker) {
    console.log('add worker', worker);
    this.workersService.addNew(worker).subscribe(res => {
      console.log('worker added', res);
    })
  }
}
