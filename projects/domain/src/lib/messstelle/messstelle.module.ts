import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessstelleDetailComponent} from './messstelle-detail/messstelle-detail.component';
import {MessstelleRoutingModule} from "./messstelle-routing.module";
import {ContextModule} from "@framework/core";
import {MENU_ACTION_FACTORY, MenueModule, MenuService,} from "@framework/ui";
import {Action1, MessstelleDelete, SubAction1, SubAction2} from "./menu-configuration/messstelle-menu-actions";


@NgModule({
    declarations: [
        MessstelleDetailComponent
    ],
    imports: [
        CommonModule,
        MessstelleRoutingModule, ContextModule, MenueModule
    ],
    providers: [
        MenuService,
        MENU_ACTION_FACTORY(Action1),
        MENU_ACTION_FACTORY(SubAction1),
        MENU_ACTION_FACTORY(SubAction2),
        MENU_ACTION_FACTORY(MessstelleDelete),
    ]
})
export class MessstelleModule {
}
