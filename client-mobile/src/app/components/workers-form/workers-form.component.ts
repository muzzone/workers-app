import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Worker } from '../../shared/models/worker.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-workers-form',
  templateUrl: './workers-form.component.html',
  styleUrls: ['./workers-form.component.scss'],
})
export class WorkersFormComponent implements OnInit {
  @Input() worker: Worker;
  @Input() title: string;

  @Output() submit: EventEmitter<any> = new EventEmitter;

  form: FormGroup;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.worker.name, [Validators.required, Validators.minLength(4)]),
      gender: new FormControl(this.worker.gender, [Validators.required]),
      contactInformation: new FormControl(this.worker.contactInformation, [Validators.required, Validators.minLength(4)]),
      salary: new FormControl(this.worker.salary, [Validators.required]),
      position: new FormControl(this.worker.position, [Validators.required, Validators.minLength(4)]),
    });
  }

  submitForm(event) {
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

  back() {
    this._location.back();
  }

}
