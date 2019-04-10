import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.loadingController.dismiss();
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      pass: new FormControl(''),
    });
  }

  submitForm() {
    this.authService.logIn(this.loginForm.value);
  }
}
