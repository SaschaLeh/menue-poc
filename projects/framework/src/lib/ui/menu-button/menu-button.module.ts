import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuButtonComponent } from './menu-button.component';
import { MenuButtonMenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [MenuButtonComponent, MenuButtonMenuComponent],
    imports: [CommonModule, OverlayModule],
    exports: [MenuButtonComponent, MenuButtonMenuComponent, CommonModule, OverlayModule],
})
export class MenuButtonModule {}
