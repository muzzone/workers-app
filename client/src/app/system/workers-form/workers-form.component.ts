import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Worker} from "../../common/models/worker.model";

@Component({
  selector: 'app-workers-form',
  templateUrl: './workers-form.component.html',
  styleUrls: ['./workers-form.component.css']
})
export class WorkersFormComponent implements OnInit {
  @Input()
  worker: Worker;
  @Input()
  title: string;

  @Output()
  submit = new EventEmitter;

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.worker.name, [Validators.required, this.checkForLength]),
      gender: new FormControl(this.worker.gender, [Validators.required]),
      contactInformation: new FormControl(this.worker.contactInformation, [Validators.required, this.checkForLength]),
      salary: new FormControl(this.worker.salary, [Validators.required]),
      position: new FormControl(this.worker.position, [Validators.required, this.checkForLength]),
    });
  }

  submitForm(event) {
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= 3) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

}
