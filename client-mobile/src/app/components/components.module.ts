import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersFormComponent } from './workers-form/workers-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkersFilterComponent } from './workers-filter/workers-filter.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { RouterModule } from '@angular/router';
import { MenuItemsComponent } from './menu-items/menu-items.component';

@NgModule({
  declarations: [WorkersFormComponent, WorkersFilterComponent, ExpandableComponent, MenuItemsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [WorkersFilterComponent],
  exports: [WorkersFormComponent, ExpandableComponent, MenuItemsComponent]
})
export class ComponentsModule { }
