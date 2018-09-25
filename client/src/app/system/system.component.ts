import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit{
  router;
  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    this.router.navigate(['/home'])
  }
}
