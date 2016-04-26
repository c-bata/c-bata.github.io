/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import "es6-shim";
import "reflect-metadata";
import "rxjs/Rx";
import "zone.js/dist/zone";

import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from './app.component'
import {provide, enableProdMode} from 'angular2/core';
import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
