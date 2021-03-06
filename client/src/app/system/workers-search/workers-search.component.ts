import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import 'rxjs-compat'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-workers-search',
  templateUrl: './workers-search.component.html',
  styleUrls: ['./workers-search.component.css']
})
export class WorkersSearchComponent implements OnInit {
  @Output() searchChange = new EventEmitter;

  searchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      contactInformation: new FormControl(),
      salaryMin: new FormControl(),
      salaryMax: new FormControl(),
      position: new FormControl(),
      dateFrom: new FormControl(),
      dateTo: new FormControl()
    });

    this.searchForm.valueChanges
      .pipe(map(form => {return {form, event}}))
      .debounceTime(400)
      .subscribe((data) => {
        if (data.event.type !== 'change') {
          this.searchChange.emit(data.form);
        }
      })
  }
}
