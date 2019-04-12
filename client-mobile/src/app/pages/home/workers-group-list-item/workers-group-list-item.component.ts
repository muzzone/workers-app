import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../../../shared/models/worker.model';
import { WorkersService } from '../../../core/workers.service';

@Component({
  selector: 'app-workers-group-list-item',
  templateUrl: './workers-group-list-item.component.html',
  styleUrls: ['./workers-group-list-item.component.scss'],
})
export class WorkersGroupListItemComponent implements OnInit {
  @Input()
  groupName: string;
  @Input()
  groupItems: Worker[];

  constructor(private workersService: WorkersService) { }

  ngOnInit() {}

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      this.groupItems = this.groupItems.filter(item => item._id !== id);
    });
  }

}
