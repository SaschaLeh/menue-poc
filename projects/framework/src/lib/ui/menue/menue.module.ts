import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {MenuButtonModule} from "../menu-button/menu-button.module";
import {UtilModule} from "../util/util.module";
import {HttpClientModule} from "@angular/common/http";
import {MenuItemModule} from "./menu-item/menu-item.module";
import {IconButtonModule} from "../icon-button/icon-button.module";
import {ButtonModule} from "../button/button.module";
import {MenuActionToken} from "./menu-action.token";
import {DeleteAction, NewAction} from "./actions/base-actions";


@NgModule({
    declarations: [
        ContextMenuComponent,
    ],
    imports: [
        CommonModule,
        MenuButtonModule,
        UtilModule,
        HttpClientModule,
        MenuItemModule,
        IconButtonModule,
        ButtonModule
    ],
    exports: [ContextMenuComponent],
    providers: [
        {provide: MenuActionToken, useClass: NewAction, multi: true},
        {provide: MenuActionToken, useClass: DeleteAction, multi: true},
    ]
})
export class MenueModule {
}
