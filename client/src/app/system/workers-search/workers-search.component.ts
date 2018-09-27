import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-workers-search',
  templateUrl: './workers-search.component.html',
  styleUrls: ['./workers-search.component.css']
})
export class WorkersSearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      contactInformation: new FormControl(),
      salary: new FormControl(),
      position: new FormControl(),
      dateFrom: new FormControl(),
      dateTo: new FormControl()
    });
  }

}
