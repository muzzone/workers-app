import {Component} from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '' +
  '<div class="authCard">\n' +
  '  <mat-card>\n' +
  '    <router-outlet></router-outlet>\n' +
  '  </mat-card>\n' +
  '</div>',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent{}
