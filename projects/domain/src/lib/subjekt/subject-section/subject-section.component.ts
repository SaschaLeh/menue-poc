import {Component, OnInit} from '@angular/core';
import {Context} from "@framework/core";

@Component({
    selector: 'lib-subject-section',
    templateUrl: './subject-section.component.html',
    styleUrls: ['./subject-section.component.css']
})
export class SubjectSectionComponent implements OnInit {

    public second: Context = {type: "second", links: []}

    constructor() {
    }

    ngOnInit(): void {
    }

}
