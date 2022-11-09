import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectDetailComponent} from './subject-detail/subject-detail.component';
import {SubjectSectionComponent} from './subject-section/subject-section.component';
import {SubjektRoutingModule} from "./subjekt-routing.module";
import {ContextModule} from "@framework/core";
import {ActionHandler, MenueModule, MenuService} from "@framework/ui";
import {SubjectActionService} from "./menu-configuration/subject-action.service";


@NgModule({
    declarations: [
        SubjectDetailComponent,
        SubjectSectionComponent
    ],
    imports: [
        CommonModule,
        SubjektRoutingModule,
        ContextModule,
        MenueModule,

    ],
    providers: [MenuService, {
        provide: ActionHandler, useClass: SubjectActionService
    }]
})
export class SubjektModule {
}
