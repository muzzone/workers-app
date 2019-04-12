import { Component, Input, OnInit } from '@angular/core';
import { Worker } from '../../../shared/models/worker.model';

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

  constructor() { }

  ngOnInit() {
    console.log(this.groupName);
    console.log(this.groupItems);
  }

}
