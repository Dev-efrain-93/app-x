import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { InicioPage } from '../inicio/inicio';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            component: InicioPage,
          }
        ]
      },
      {
        path: 'predial',
        children: [
          {
            path: '',
            loadChildren: () => import('../agua-potable/agua-potable.module').then(m => m.AguaPotableModule)
          },
          {
            path: 'detalle-predial',
            loadChildren: () => import('../detalle-agua-potable/detalle-agua-potable.module').then(m => m.DetalleAguaPotableModule)
          },
          {
            path: 'detalle-predial-qr',
            loadChildren: () => import('../detalle-agua-potable-qr/detalle-agua-potable-qr.module').then(m => m.DetalleAguaPotableQrPageModule)
          },
          {
            path: 'detalle-predial-detalle',
            loadChildren: () => import('../detalle-agua-potable-detalle/detalle-agua-potable-detalle.module').then(m => m.DetalleAguaPotableDetallePageModule)
          },
          {
            path: 'pago-predial',
            loadChildren: () => import('../pago-predial/pago-predial.module').then(m => m.PagoPredialPageModule)
          }
        ]
      },
      {
        path: 'acerca',
        children: [
          {
            path: '',
            loadChildren: () => import('../acerca/acerca.module').then(m => m.AcercaModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

