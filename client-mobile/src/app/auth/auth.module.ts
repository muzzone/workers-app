import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';
import { RegistrationPage } from './registration/registration.page';
import { LogoutPage } from './logout/logout.page';

@NgModule({
  imports: [
    AuthRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthPage, LoginPage, RegistrationPage, LogoutPage]
})
export class AuthPageModule {}
