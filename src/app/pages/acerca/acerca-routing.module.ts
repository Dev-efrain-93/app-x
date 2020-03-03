import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaPage } from './acerca';

const routes: Routes = [
  {
    path: '',
    component: AcercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercaPageRoutingModule { }
