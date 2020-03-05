import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleAguaPotablePage } from './detalle-agua-potable';

const routes: Routes = [
  {
    path: '',
    component: DetalleAguaPotablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleAguaPotablePageRoutingModule { }
