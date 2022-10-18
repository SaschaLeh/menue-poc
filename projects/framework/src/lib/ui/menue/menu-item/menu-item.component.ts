import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';
import { RippleService } from '../../../indicators/ripple/ripple.service';

@Component({
    selector: 'inno-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
    /**
     * Erzeugt den Ripple Effekt beim Klick auf das Menu Item
     */
    @HostListener('click', ['$event'])
    public handleClick(mouseEvent: MouseEvent): void {
        this.rippleService.showEffect(mouseEvent.x, mouseEvent.y, false, this.elementRef.nativeElement);
    }

    constructor(private readonly rippleService: RippleService, private readonly elementRef: ElementRef) {}
}
