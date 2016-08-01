import { provideRouter, RouterConfig }  from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'my-hello',
  template: `
    <p>Hello World!</p>
  `
})
class HelloWorldComponent {
}

@Component({
  selector: 'my-hero',
  template: `
    <h1>Hero</h1>
    <my-hello></my-hello>
  `,
  directives: [HelloWorldComponent]
})
class HeroesComponent {
}

@Component({
  selector: 'my-works',
  template: `
    <h1>Works</h1>
    <my-hello></my-hello>
  `,
  directives: [HelloWorldComponent]
})
class WorksComponent {
}


const routes: RouterConfig = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'works',
    component: WorksComponent
  }
];

export const appRouteProviders = [
    provideRouter(routes)
];
