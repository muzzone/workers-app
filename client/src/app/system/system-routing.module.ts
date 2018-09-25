import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuard} from '../core/auth.guard';
import { WorkersComponent } from './workers/workers.component'

const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'workers', component: WorkersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
