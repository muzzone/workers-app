import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }