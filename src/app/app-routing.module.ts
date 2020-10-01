import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffectedComponent } from './affected/affected.component';
import { RecoveredComponent } from './recovered/recovered.component';

const routes: Routes = [
  {
    path: 'affected',
    component: AffectedComponent,
  },
  {
    path: 'recovered',
    component: RecoveredComponent,
  },
  {
    path: '',
    redirectTo: '/affected',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
