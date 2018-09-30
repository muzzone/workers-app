import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './core/auth.service';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {SystemModule} from './system/system.module';
import {AuthGuard} from './core/auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './common/classes/token.interceptor';
import {WorkersService} from "./core/workers.service";
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    SnotifyModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    WorkersService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    },
    {
      provide: 'SnotifyToastConfig',
      useValue: ToastDefaults
    },
    SnotifyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
