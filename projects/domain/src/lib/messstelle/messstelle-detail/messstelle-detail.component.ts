import {Component, OnInit} from '@angular/core';
import {Context} from "@framework/core";

@Component({
    selector: 'lib-messstelle-detail',
    templateUrl: './messstelle-detail.component.html',
    styleUrls: ['./messstelle-detail.component.css']
})
export class MessstelleDetailComponent implements OnInit {
    public menuContext: Context = {type: 'messstelle', links: []}

    constructor() {
    }

    ngOnInit(): void {
    }

}
