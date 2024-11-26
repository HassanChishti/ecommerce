import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeloCardPage } from './helo-card.page';

const routes: Routes = [
  {
    path: '',
    component: HeloCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeloCardPageRoutingModule {}
