import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioPage } from './inicio';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioPageRoutingModule { }
