import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuard} from '../core/auth.guard';

// const routes: Routes = [
//   {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
//       {path: 'workers', component: WorkersComponent}
//     ]}
// ];

const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
