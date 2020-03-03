import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
let SessionDetailPage = class SessionDetailPage {
    constructor(dataProvider, userProvider, route) {
        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
                const sessionId = this.route.snapshot.paramMap.get('sessionId');
                for (const group of data.schedule[0].groups) {
                    if (group && group.sessions) {
                        for (const session of group.sessions) {
                            if (session && session.id === sessionId) {
                                this.session = session;
                                this.isFavorite = this.userProvider.hasFavorite(this.session.name);
                                break;
                            }
                        }
                    }
                }
            }
        });
    }
    ionViewDidEnter() {
        this.defaultHref = `/app/tabs/schedule`;
    }
    sessionClick(item) {
        console.log('Clicked', item);
    }
    toggleFavorite() {
        if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
        }
        else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
        }
    }
    shareSession() {
        console.log('Clicked share session');
    }
};
SessionDetailPage = tslib_1.__decorate([
    Component({
        selector: 'page-session-detail',
        styleUrls: ['./session-detail.scss'],
        templateUrl: 'session-detail.html'
    }),
    tslib_1.__metadata("design:paramtypes", [ConferenceData,
        UserData,
        ActivatedRoute])
], SessionDetailPage);
export { SessionDetailPage };
//# sourceMappingURL=session-detail.js.map