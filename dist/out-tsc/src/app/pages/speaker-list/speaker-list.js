import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
let SpeakerListPage = class SpeakerListPage {
    constructor(actionSheetCtrl, confData, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.speakers = [];
    }
    ionViewDidEnter() {
        this.confData.getSpeakers().subscribe((speakers) => {
            this.speakers = speakers;
        });
    }
    goToSpeakerTwitter(speaker) {
        this.inAppBrowser.create(`https://twitter.com/${speaker.twitter}`, '_blank');
    }
    openSpeakerShare(speaker) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Share ' + speaker.name,
                buttons: [
                    {
                        text: 'Copy Link',
                        handler: () => {
                            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                            if (window['cordova'] &&
                                window['cordova'].plugins.clipboard) {
                                window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                            }
                        }
                    },
                    {
                        text: 'Share via ...'
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openContact(speaker) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const mode = 'ios'; // this.config.get('mode');
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Contact ' + speaker.name,
                buttons: [
                    {
                        text: `Email ( ${speaker.email} )`,
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: () => {
                            window.open('mailto:' + speaker.email);
                        }
                    },
                    {
                        text: `Call ( ${speaker.phone} )`,
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: () => {
                            window.open('tel:' + speaker.phone);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
SpeakerListPage = tslib_1.__decorate([
    Component({
        selector: 'page-speaker-list',
        templateUrl: 'speaker-list.html',
        styleUrls: ['./speaker-list.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActionSheetController,
        ConferenceData,
        InAppBrowser,
        Router])
], SpeakerListPage);
export { SpeakerListPage };
//# sourceMappingURL=speaker-list.js.map