import { provideRouter, RouterConfig }  from "@angular/router";

import {TopComponent} from "./top.component";
import {WorksComponent} from "./works.component";

const routes: RouterConfig = [
  {
    path: "",
    component: TopComponent
  },
  {
    path: "works",
    component: WorksComponent
  }
];

export const appRouteProviders = [
    provideRouter(routes)
];
