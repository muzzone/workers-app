import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { WorkerListItemComponent } from './worker-list-item/worker-list-item.component';

@NgModule({
  declarations: [HomePage, WorkerListItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
