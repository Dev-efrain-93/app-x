import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
let UserData = class UserData {
    constructor(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    hasFavorite(sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    }
    addFavorite(sessionName) {
        this._favorites.push(sessionName);
    }
    removeFavorite(sessionName) {
        const index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    }
    login(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return this.events.publish('user:login');
        });
    }
    signup(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return this.events.publish('user:signup');
        });
    }
    logout() {
        return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
            return this.storage.remove('username');
        }).then(() => {
            this.events.publish('user:logout');
        });
    }
    setUsername(username) {
        return this.storage.set('username', username);
    }
    getUsername() {
        return this.storage.get('username').then((value) => {
            return value;
        });
    }
    isLoggedIn() {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            return value === true;
        });
    }
    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value;
        });
    }
};
UserData = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Events,
        Storage])
], UserData);
export { UserData };
//# sourceMappingURL=user-data.js.map