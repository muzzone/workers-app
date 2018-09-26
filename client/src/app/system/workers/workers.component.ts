import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {WorkersService} from "../../core/workers.service";
import {Router} from "@angular/router";
import {Worker} from "../../common/models/worker.model";


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, OnDestroy {

  workers: Worker[] = [];
  displayedColumns: string[] = ['name', 'gender', 'contactInformation', 'date', 'salary', 'position', 'actions'];
  aSub: Subscription;

  constructor(private workersService: WorkersService, private router: Router) { }

  ngOnInit() {
    this.aSub = this.workersService.getAll().subscribe((_workers: any) => {
      console.log(_workers);
      this.workers = _workers;
    });
  }

  editWorker(id) {
    this.router.navigate(['/edit-worker/' + id]);
  }

  deleteWorker(id) {
    console.log(id);
  }

  ngOnDestroy() {
    this.aSub ? this.aSub.unsubscribe() : null;
  }

}
