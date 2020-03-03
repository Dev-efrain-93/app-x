import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
let SchedulePage = class SchedulePage {
    constructor(alertCtrl, confData, loadingCtrl, modalCtrl, router, toastCtrl, user, config) {
        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    ngOnInit() {
        this.updateSchedule();
        this.ios = this.config.get('mode') === 'ios';
    }
    updateSchedule() {
        // Close any open sliding items when the schedule updates
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data) => {
            this.shownSessions = data.shownSessions;
            this.groups = data.groups;
        });
    }
    presentFilter() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ScheduleFilterPage,
                componentProps: { excludedTracks: this.excludeTracks }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracks = data;
                this.updateSchedule();
            }
        });
    }
    addFavorite(slidingItem, sessionData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.user.hasFavorite(sessionData.name)) {
                // woops, they already favorited it! What shall we do!?
                // prompt them to remove it
                this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
            }
            else {
                // remember this session as a user favorite
                this.user.addFavorite(sessionData.name);
                // create an alert instance
                const alert = yield this.alertCtrl.create({
                    header: 'Favorite Added',
                    buttons: [{
                            text: 'OK',
                            handler: () => {
                                // close the sliding item
                                slidingItem.close();
                            }
                        }]
                });
                // now present the alert on top of all other content
                yield alert.present();
            }
        });
    }
    removeFavorite(slidingItem, sessionData, title) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: 'Would you like to remove this session from your favorites?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            // they clicked the cancel button, do not remove the session
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    },
                    {
                        text: 'Remove',
                        handler: () => {
                            // they want to remove this session from their favorites
                            this.user.removeFavorite(sessionData.name);
                            this.updateSchedule();
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    }
                ]
            });
            // now present the alert on top of all other content
            yield alert.present();
        });
    }
    openSocial(network, fab) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: `Posting to ${network}`,
                duration: (Math.random() * 1000) + 500
            });
            yield loading.present();
            yield loading.onWillDismiss();
            fab.close();
        });
    }
};
tslib_1.__decorate([
    ViewChild('scheduleList', { static: true }),
    tslib_1.__metadata("design:type", IonList)
], SchedulePage.prototype, "scheduleList", void 0);
SchedulePage = tslib_1.__decorate([
    Component({
        selector: 'page-schedule',
        templateUrl: 'schedule.html',
        styleUrls: ['./schedule.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        ConferenceData,
        LoadingController,
        ModalController,
        Router,
        ToastController,
        UserData,
        Config])
], SchedulePage);
export { SchedulePage };
//# sourceMappingURL=schedule.js.map