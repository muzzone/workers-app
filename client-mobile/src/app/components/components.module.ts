import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersFormComponent } from './workers-form/workers-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkersFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [WorkersFormComponent]
})
export class ComponentsModule { }
