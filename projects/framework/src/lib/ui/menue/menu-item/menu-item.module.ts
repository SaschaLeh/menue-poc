import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuItemComponent } from './menu-item.component';

@NgModule({
    declarations: [MenuItemComponent],
    imports: [CommonModule],
    exports: [CommonModule, MenuItemComponent],
})
export class MenuItemModule {}
