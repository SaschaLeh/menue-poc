import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {ButtonType} from "../util/button-type.type";

@Component({
    selector: 'inno-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    /**
     * Text des Button
     */
    @Input() public text = 'Button';

    /**
     * True wenn der Button deaktiviert ist
     */
    @HostBinding('class.disabled')
    @Input()
    public disabled = false;

    /**
     * Art des Buttons
     */
    @Input() public type: ButtonType = 'secondary';

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
}
