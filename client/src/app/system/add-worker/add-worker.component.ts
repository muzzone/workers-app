import { Component, OnInit } from '@angular/core';
import {SnotifyService} from 'ng-snotify';

import {Worker} from "../../shared/models/worker.model";
import {WorkersService} from "../../core/workers.service";

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  worker = new Worker('','','',0,'');

  constructor(private workersService: WorkersService, private snotifyService: SnotifyService) { }

  ngOnInit() {}

  submit(worker) {
    this.workersService.addNew(worker).subscribe(res => {
      this.snotifyService.success('Worker added', {position: 'rightTop'});
    }, e => {
      this.snotifyService.error('Something went wrong!', {position: 'rightTop'})
    })
  }
}
