import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';

import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {appRouteProviders} from './app.routes';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `
})
export class MyAppComponent {
    title = 'A Tour of Heroes';
}

bootstrap(MyAppComponent, [
    appRouteProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy}
])
.catch(err => console.error(err));
