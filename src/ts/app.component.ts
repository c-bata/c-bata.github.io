import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutmeComponent} from "./aboutme.component";
import {WorksComponent} from "./works.component";


@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>  
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/about',
        name: 'AboutMe',
        component: AboutmeComponent,
        useAsDefault: true
    },
    {
        path: '/works',
        name: 'Works',
        component: WorksComponent,
    }
])

export class AppComponent {
}
