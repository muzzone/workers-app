import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { WorkerListItemComponent } from './worker-list-item/worker-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [HomePage, WorkerListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
