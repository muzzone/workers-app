import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  workerId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('id');
  }

}
