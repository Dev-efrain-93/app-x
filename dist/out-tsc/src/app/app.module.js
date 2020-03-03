import * as tslib_1 from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es-MX', localeEsExtra);
//#endregion
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot(),
            ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production
            })
        ],
        declarations: [AppComponent],
        providers: [
            //{ provide: LOCALE_ID, useValue: "es-MX" },//localizacion de preferencia, 
            InAppBrowser,
            SplashScreen,
            StatusBar,
            AppVersion,
            FileTransfer,
            File,
            BarcodeScanner,
            Base64ToGallery
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map