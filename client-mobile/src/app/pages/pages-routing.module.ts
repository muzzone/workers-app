import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-worker', loadChildren: './add-worker/add-worker.module#AddWorkerPageModule' },
  { path: 'worker-edit/:id', loadChildren: './edit-worker/edit-worker.module#EditWorkerPageModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
