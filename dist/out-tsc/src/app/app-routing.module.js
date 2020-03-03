import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        redirectTo: '/tutorial',
        pathMatch: 'full'
    },
    {
        path: 'app',
        loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
    },
    {
        path: 'tutorial',
        loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map