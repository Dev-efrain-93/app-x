import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PredialPage } from './predial';
const routes: Routes = [
  {
    path: '',
    component: PredialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredialPageRoutingModule {}
