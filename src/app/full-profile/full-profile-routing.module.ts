import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullProfilePage } from './full-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FullProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullProfilePageRoutingModule {}
