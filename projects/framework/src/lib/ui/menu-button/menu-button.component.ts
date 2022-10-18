import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonComponent {
    /**
     * Two-Way-Binding, benachrichtige die Parent-Component über state-changes.
     */
    @Output() public readonly isOpenChange = new EventEmitter<boolean>();
    private open = false;

    /**
     * True, wenn das Menü geöffnet ist
     */
    public get isOpen(): boolean {
        return this.open;
    }

    /**
     * True, wenn das Menü geöffnet ist
     */
    @Input()
    public set isOpen(open: boolean) {
        this.open = open;
        this.isOpenChange.emit(this.open);
    }
}
