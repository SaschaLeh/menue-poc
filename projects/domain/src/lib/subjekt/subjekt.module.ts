import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectDetailComponent} from './subject-detail/subject-detail.component';
import {SubjectSectionComponent} from './subject-section/subject-section.component';
import {SubjektRoutingModule} from "./subjekt-routing.module";
import {ContextModule} from "@framework/core";
import {MENU_ACTION_FACTORY, MenueModule, MenuService} from "@framework/ui";
import {Action1, Action2, SubAction1, SubAction2} from "./menu-configuration/subject-menu-actions";


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
    providers: [MenuService,
        MENU_ACTION_FACTORY(Action1),
        MENU_ACTION_FACTORY(Action2),
        MENU_ACTION_FACTORY(SubAction1),
        MENU_ACTION_FACTORY(SubAction2),
    ]
})
export class SubjektModule {
}
