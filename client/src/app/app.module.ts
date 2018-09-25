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
    MatCardModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
