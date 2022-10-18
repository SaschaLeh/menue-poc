import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectDetailComponent} from './subject-detail/subject-detail.component';
import {SubjectSectionComponent} from './subject-section/subject-section.component';
import {SubjektRoutingModule} from "./subjekt-routing.module";


@NgModule({
    declarations: [
        SubjectDetailComponent,
        SubjectSectionComponent
    ],
    imports: [
        CommonModule,
        SubjektRoutingModule
    ]
})
export class SubjektModule {
}
