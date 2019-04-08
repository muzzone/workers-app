import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddWorkerPage } from './add-worker.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AddWorkerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [AddWorkerPage]
})
export class AddWorkerPageModule {}
