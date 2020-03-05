import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AguaPotablePage } from './agua-potable';
const routes: Routes = [
  {
    path: '',
    component: AguaPotablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguaPotablePageRoutingModule {}
