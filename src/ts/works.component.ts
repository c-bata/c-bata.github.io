import {Component} from "@angular/core";
import {Card} from "./card.component";

@Component({
    selector: "my-works",
    templateUrl: "./src/ts/works.component.html",
    directives: [Card],
})
export class WorksComponent {
}
