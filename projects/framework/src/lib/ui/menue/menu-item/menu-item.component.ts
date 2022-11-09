import {ChangeDetectionStrategy, Component, ElementRef, HostListener} from '@angular/core';

@Component({
    selector: 'inno-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
    constructor(private readonly elementRef: ElementRef) {
    }

    /**
     * Erzeugt den Ripple Effekt beim Klick auf das Menu Item
     */
    @HostListener('click', ['$event'])
    public handleClick(mouseEvent: MouseEvent): void {
    }
}
