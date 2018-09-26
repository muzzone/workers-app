import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {WorkersComponent} from './workers/workers.component'
import {MatIconModule} from '@angular/material/icon';
import {AddWorkerComponent} from './add-worker/add-worker.component';
import {EditWorkerComponent} from './edit-worker/edit-worker.component';
import {WorkersFormComponent} from './workers-form/workers-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    SystemRoutingModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  declarations: [
    SystemComponent,
    WorkersComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    WorkersFormComponent,
  ]
})

export class SystemModule {}
