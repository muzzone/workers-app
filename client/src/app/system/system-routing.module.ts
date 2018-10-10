import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {WorkersTableComponent} from './workers-table/workers-table.component'
import {AddWorkerComponent} from "./add-worker/add-worker.component";
import {EditWorkerComponent} from "./edit-worker/edit-worker.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: SystemComponent, children: [
      {path: 'home', component: WorkersTableComponent},
      {path: 'new-worker', component: AddWorkerComponent},
      {path: 'edit-worker/:id', component: EditWorkerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
