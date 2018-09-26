import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuard} from '../core/auth.guard';
import { WorkersComponent } from './workers/workers.component'
import {AddWorkerComponent} from "./add-worker/add-worker.component";
import {EditWorkerComponent} from "./edit-worker/edit-worker.component";

const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: WorkersComponent},
      {path: 'new-worker', component: AddWorkerComponent},
      {path: 'edit-worker/:id', component: EditWorkerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
