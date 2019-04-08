import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../../shared/models/worker.model';

@Component({
  selector: 'app-worker-list-item',
  templateUrl: './worker-list-item.component.html',
  styleUrls: ['./worker-list-item.component.scss'],
})
export class WorkerListItemComponent implements OnInit {

  @Input()
  worker: Worker;

  @Output()
  deleteWorker: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit() {}

}
