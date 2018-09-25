import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [SystemRoutingModule, CommonModule, MatTableModule, MatButtonModule],
  declarations: [
    SystemComponent,
  ]
})

export class SystemModule {}
