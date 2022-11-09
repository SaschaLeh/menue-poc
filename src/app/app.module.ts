import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuConfigurationToken} from "../../projects/framework/src/lib/ui/menue/menu-configuartion.token";
import {MENU_CONFIGURATION} from "../../projects/domain/src/lib/menu-configuration.const";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [{
        provide: MenuConfigurationToken, useValue: MENU_CONFIGURATION
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
