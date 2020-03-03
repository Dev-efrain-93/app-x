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
            loadChildren: () => import('../predial/predial.module').then(m => m.PredialModule)
          },
          {
            path: 'detalle-predial',
            loadChildren: () => import('../detalle-predial/detalle-predial.module').then(m => m.DetallePredialModule)
          },
          {
            path: 'detalle-predial-qr',
            loadChildren: () => import('../detalle-predial-qr/detalle-predial-qr.module').then(m => m.DetallePredialQrPageModule)
          },
          {
            path: 'detalle-predial-detalle',
            loadChildren: () => import('../detalle-predial-detalle/detalle-predial-detalle.module').then(m => m.DetallePredialDetallePageModule)
          },
          {
            path: 'pago-predial',
            loadChildren: () => import('../pago-predial/pago-predial.module').then(m => m.PagoPredialPageModule)
          }
        ]
      },
      {
        path: 'refrendo',
        children: [
          {
            path: '',
            loadChildren: () => import('../refrendo/refrendo.module').then(m => m.RefrendoPageModule)
          },
          {
            path: 'detalle-refrendo',
            loadChildren: () => import('../detalle-refrendo/detalle-refrendo.module').then(m => m.DetalleRefrendoPageModule)
          },
          {
            path: 'detalle-refrendo-qr',
            loadChildren: () => import('../detalle-refrendo-qr/detalle-refrendo-qr.module').then(m => m.DetalleRefrendoQrPageModule)
          },
          {
            path: 'pago-refrendo',
            loadChildren: () => import('../pago-refrendo/pago-refrendo.module').then(m => m.PagoRefrendoPageModule)
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

