import {Component} from "@angular/core";
import {Card} from "./card.component";
import {Tags} from "./tags.component";

@Component({
    selector: "my-works",
    templateUrl: "./src/ts/works.component.html",
    directives: [Card, Tags],
})
export class WorksComponent {
}
