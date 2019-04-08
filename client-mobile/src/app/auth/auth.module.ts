import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';
import { RegistrationPage } from './registration/registration.page';

@NgModule({
  imports: [
    AuthRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthPage, LoginPage, RegistrationPage]
})
export class AuthPageModule {}
