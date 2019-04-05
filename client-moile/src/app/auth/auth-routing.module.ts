import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPage } from './registration/registration.page';
import { LoginPage } from './login/login.page';
import { AuthPage } from './auth.page';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', component: AuthPage, children: [
      {path: 'login', component: LoginPage},
      {path: 'registration', component: RegistrationPage}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
