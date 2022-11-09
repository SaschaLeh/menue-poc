import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import type {IconButtonSize} from './icon-button-size.type';
import {ButtonType} from "../util/button-type.type";

@Component({
    selector: 'inno-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
    /**
     * True, wenn der Button deaktiviert ist
     */
    @HostBinding('class.disabled')
    @Input()
    public disabled = false;

    /**
     * Art des Buttons
     */
    @Input() public type: ButtonType = 'secondary';

    /**
     * Grösse des Buttons
     */
    @Input() public size: IconButtonSize = 'medium';

    /**
     * Wirf ein Event, wenn der interne Button den Fokus bekommt.
     */
    @Output() public readonly buttonFocus = new EventEmitter<void>();

    /**
     * Wirf ein Event, wenn der interne Button den Fokus verliert.
     */
    @Output() public readonly buttonBlur = new EventEmitter<void>();

    @HostBinding('class.secondary')
    private get __secondary(): boolean {
        return this.type === 'secondary';
    }

    @HostBinding('class.primary')
    private get __primary(): boolean {
        return this.type === 'primary';
    }

    @HostBinding('class.destructive')
    private get __destructive(): boolean {
        return this.type === 'destructive';
    }

    @HostBinding('class.tertiary')
    private get __tertiary(): boolean {
        return this.type === 'tertiary';
    }

    @HostBinding('class.small')
    private get __small(): boolean {
        return this.size === 'small';
    }

    @HostBinding('class.medium')
    private get __medium(): boolean {
        return this.size === 'medium';
    }

    @HostBinding('class.large')
    private get __large(): boolean {
        return this.size === 'large';
    }
}
