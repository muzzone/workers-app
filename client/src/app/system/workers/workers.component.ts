import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {WorkersService} from "../../core/workers.service";

interface Worker {
  name: string;
  gender: string;
  contactInformation: string;
  date: any;
  salary: string;
  position: string;
}

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, OnDestroy {

  workers: Worker[] = [];
  displayedColumns: string[] = ['name', 'gender', 'contactInformation', 'date', 'salary', 'position', 'actions'];
  aSub: Subscription;

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.aSub = this.workersService.getAll().subscribe((_workers: any) => {
      console.log(_workers);
      this.workers = _workers;
    });
  }

  ngOnDestroy() {
    this.aSub ? this.aSub.unsubscribe() : null;
  }

}
