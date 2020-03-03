import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
let SpeakerDetailPage = class SpeakerDetailPage {
    constructor(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            const speakerId = this.route.snapshot.paramMap.get('speakerId');
            if (data && data.speakers) {
                for (const speaker of data.speakers) {
                    if (speaker && speaker.id === speakerId) {
                        this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    }
};
SpeakerDetailPage = tslib_1.__decorate([
    Component({
        selector: 'page-speaker-detail',
        templateUrl: 'speaker-detail.html',
        styleUrls: ['./speaker-detail.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ConferenceData,
        Router,
        ActivatedRoute])
], SpeakerDetailPage);
export { SpeakerDetailPage };
//# sourceMappingURL=speaker-detail.js.map