import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      pass: new FormControl(''),
    });
  }

  submitForm() {
    this.authService.logIn(this.loginForm.value)
  }

}
