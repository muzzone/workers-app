import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatSelectModule} from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MomentModule} from "angular2-moment";
import {MatDatepickerModule} from '@angular/material/datepicker';

import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {WorkersTableComponent} from './workers-table/workers-table.component'
import {AddWorkerComponent} from './add-worker/add-worker.component';
import {EditWorkerComponent} from './edit-worker/edit-worker.component';
import {WorkersFormComponent} from './workers-form/workers-form.component';

import {WorkersSearchComponent} from './workers-search/workers-search.component';

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
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTooltipModule,
    MomentModule,
    MatDividerModule
  ],
  declarations: [
    SystemComponent,
    WorkersTableComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    WorkersFormComponent,
    WorkersSearchComponent,
  ]
})

export class SystemModule {}
