import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationFrom: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registrationFrom = new FormGroup({
      email: new FormControl('', [Validators.email]),
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submitForm() {
    if (this.registrationFrom.valid) {
      this.authService.signUp(this.registrationFrom.value)
    }
  }
}
