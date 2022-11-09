import {Component, OnInit} from '@angular/core';
import {Context} from "@framework/core";

@Component({
    selector: 'lib-subject-detail',
    templateUrl: './subject-detail.component.html',
    styleUrls: ['./subject-detail.component.css'],
})
export class SubjectDetailComponent implements OnInit {

    public menuContext: Context = {type: 'main', links: []}


    constructor() {
    }

    ngOnInit(): void {
    }

}
