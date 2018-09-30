import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationFrom: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registrationFrom = new FormGroup({
      email: new FormControl('', [Validators.email, this.checkForLength]),
      login: new FormControl('', [Validators.required, this.checkForLength]),
      pass: new FormControl('', [Validators.required, this.checkForLength]),
    });
  }

  submitForm() {
    if (this.registrationFrom.valid) {
      this.authService.signUp(this.registrationFrom.value)
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
