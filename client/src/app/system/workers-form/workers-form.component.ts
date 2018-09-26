import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-workers-form',
  templateUrl: './workers-form.component.html',
  styleUrls: ['./workers-form.component.css']
})
export class WorkersFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.email, this.checkForLength]),
      gender: new FormControl('', [Validators.required, this.checkForLength]),
      contactInformation: new FormControl('', [Validators.required, this.checkForLength]),
      salary: new FormControl('', [Validators.required, this.checkForLength]),
      position: new FormControl('', [Validators.required, this.checkForLength]),
    });
  }

  submitForm() {
    console.log(this.form.value)
  }

  checkForLength(control: FormControl) {
    // if (control.value.length <= 3) {
    //   return {
    //     'lengthError': true
    //   };
    // }
    return null;
  }

}
