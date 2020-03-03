import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs-page';
import { InicioPage } from '../inicio/inicio';
const routes = [
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
                    }
                ]
            },
            {
                path: 'tenencia',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tenencia/tenencia.module').then(m => m.TenenciaPageModule)
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-page-routing.module.js.map