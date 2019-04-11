import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isUserLoggedIn: boolean;

  ngOnInit() {
    this.authService.getActiveUser().subscribe(user => {
      this.isUserLoggedIn = !!user;
    });
  }

}
