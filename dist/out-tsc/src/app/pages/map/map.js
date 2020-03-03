import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { darkStyle } from './map-dark-style';
let MapPage = class MapPage {
    constructor(doc, platform) {
        this.doc = doc;
        this.platform = platform;
    }
    ngAfterViewInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const appEl = this.doc.querySelector('ion-app');
            let isDark = false;
            let style = [];
            if (appEl.classList.contains('dark-theme')) {
                style = darkStyle;
            }
            const googleMaps = yield getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');
            let map;
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        const el = mutation.target;
                        isDark = el.classList.contains('dark-theme');
                        if (map && isDark) {
                            map.setOptions({ styles: darkStyle });
                        }
                        else if (map) {
                            map.setOptions({ styles: [] });
                        }
                    }
                });
            });
            observer.observe(appEl, {
                attributes: true
            });
        });
    }
};
tslib_1.__decorate([
    ViewChild('mapCanvas', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], MapPage.prototype, "mapElement", void 0);
MapPage = tslib_1.__decorate([
    Component({
        selector: 'page-map',
        templateUrl: 'map.html',
        styleUrls: ['./map.scss']
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Document,
        Platform])
], MapPage);
export { MapPage };
function getGoogleMaps(apiKey) {
    const win = window;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            const googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}
//# sourceMappingURL=map.js.map