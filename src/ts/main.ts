import "es6-shim";
import "reflect-metadata";
import "rxjs/Rx";
import "zone.js/dist/zone";

import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from './app.component'
import {provide} from 'angular2/core';
import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
