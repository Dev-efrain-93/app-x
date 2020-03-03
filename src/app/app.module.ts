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
import { Network } from '@ionic-native/network/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { ErrorConexionPage } from '../app/pages/error-conexion/error-conexion';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';


//#region Ajuste localización
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs  from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es-MX', localeEsExtra);
//#endregion

@NgModule({
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
  declarations: [
    AppComponent,
    ErrorConexionPage
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: "es-MX" },//localizacion de preferencia, 
    InAppBrowser, 
    SplashScreen, 
    StatusBar, 
    AppVersion, 
    FileTransfer, 
    File,
    BarcodeScanner, 
    Base64ToGallery,
    AndroidPermissions,
    FileOpener,
    Network,
    Geolocation,
    NativeGeocoder,
    GoogleMaps,
    LaunchNavigator
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ErrorConexionPage
  ]
})
export class AppModule {}
