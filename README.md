# Ionic Angular App X

Aplicación con pequeño flujo desarrollado en Ionic Framework con Angular.


## Tabla de Contenido
- [Ejecución](#ejecución)
- [Despliegue](#despliegue)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Ejecución

* [Descarga de instalador](https://nodejs.org/) para Node.js 6 o superior.
* Instalar globalmente el CLI de ionic: `npm install -g ionic`
* Clonar repositorio: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Ejecutar `npm install` desde la raíz del proyecto.
* Ejecutar `ionic serve` en la terminar desde la raíz del proyecto.


## Despliegue

### Progressive Web App

1. Ejecutar `npm run ionic:build --prod`
2. Colocar la carpeta `www` en servicio de host

### Android

1. Ejecutar `ionic cordova run android --prod`

### iOS

1. Ejecutar `ionic cordova run ios --prod`
