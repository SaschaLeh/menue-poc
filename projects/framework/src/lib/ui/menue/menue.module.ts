import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {MenuButtonModule} from "../menu-button/menu-button.module";
import {UtilModule} from "../util/util.module";
import {MenuItemComponent} from "./menu-item/menu-item.component";


@NgModule({
    declarations: [
        ContextMenuComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        MenuButtonModule,
        UtilModule
    ],
    exports: [ContextMenuComponent]
})
export class MenueModule {
}
