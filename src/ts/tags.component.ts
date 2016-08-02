import {Component, Input} from "@angular/core";

@Component({
    selector: "tags",
    template: `
    <ul>
        <li *ngFor="let item of getItems()">{{item}}</li>
    </ul>
    `,
    styles: [`
    ul {
      padding-left: 0px;
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      -webkit-flex-direction: row;
      justify-content: flex-start;
      -webkit-justify-content: flex-start;
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
    }
    li {
      list-style-type: none;
      margin: 3px;
      padding: 5px 8px;
      color: rgba(0, 0, 0, 0.54);
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.54);
    }
    `],
})
export class Tags {
    @Input() items: string;

    getItems() {
        return this.items.split(",");
    }
}
