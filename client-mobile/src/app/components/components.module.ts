import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersFormComponent } from './workers-form/workers-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkersFilterComponent } from './workers-filter/workers-filter.component';
import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
  declarations: [WorkersFormComponent, WorkersFilterComponent, ExpandableComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [WorkersFilterComponent],
  exports: [WorkersFormComponent, ExpandableComponent]
})
export class ComponentsModule { }
