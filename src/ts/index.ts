import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";

import {Component, enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {appRouteProviders} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

enableProdMode();

@Component({
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
}

bootstrap(AppComponent, [
    appRouteProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy}
])
.catch(err => console.error(err));
