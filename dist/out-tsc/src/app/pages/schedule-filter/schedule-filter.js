import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
let ScheduleFilterPage = class ScheduleFilterPage {
    constructor(confData, config, modalCtrl, navParams) {
        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
    }
    ionViewWillEnter() {
        this.ios = this.config.get('mode') === `ios`;
    }
    // TODO use the ionViewDidEnter event
    ngAfterViewInit() {
        // passed in array of track names that should be excluded (unchecked)
        const excludedTrackNames = this.navParams.get('excludedTracks');
        this.confData.getTracks().subscribe((tracks) => {
            tracks.forEach(track => {
                this.tracks.push({
                    name: track.name,
                    icon: track.icon,
                    isChecked: (excludedTrackNames.indexOf(track.name) === -1)
                });
            });
        });
    }
    selectAll(check) {
        // set all to checked or unchecked
        this.tracks.forEach(track => {
            track.isChecked = check;
        });
    }
    applyFilters() {
        // Pass back a new array of track names to exclude
        const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
        this.dismiss(excludedTrackNames);
    }
    dismiss(data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
};
ScheduleFilterPage = tslib_1.__decorate([
    Component({
        selector: 'page-schedule-filter',
        templateUrl: 'schedule-filter.html',
        styleUrls: ['./schedule-filter.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ConferenceData,
        Config,
        ModalController,
        NavParams])
], ScheduleFilterPage);
export { ScheduleFilterPage };
//# sourceMappingURL=schedule-filter.js.map