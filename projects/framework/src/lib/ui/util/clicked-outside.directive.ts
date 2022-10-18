import {Directive, ElementRef, EventEmitter, Host, Input, OnChanges, OnInit, Output} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {InnoComponent} from "./inno.component";
import {WindowService} from "./window.service";

/**
 * Directive um click ausserhalb einer Komponente zu erfassen.
 */
@Directive({
    selector: '[innoClickedOutside]',
})
export class ClickedOutsideDirective extends InnoComponent implements OnChanges, OnInit {
    /**
     * Gibt an wann nach click event gelauscht werden soll
     */
    @Input() public listenOutsideClick = true;

    /**
     * Emit wenn außerhalb der Host-Component geklickt wurde
     */
    @Output() public readonly innoClickedOutside = new EventEmitter<void>();
    private listenClickSubscription = Subscription.EMPTY;

    constructor(@Host() private readonly elementRef: ElementRef, private readonly windowService: WindowService) {
        super();
    }

    public ngOnChanges(): void {
        this.setup();
    }

    public ngOnInit(): void {
        this.setup();
    }

    private setup(): void {
        this.listenClickSubscription.unsubscribe();
        if (this.listenOutsideClick) {
            this.listenClickSubscription = fromEvent(this.windowService.nativeWindow, 'click')
                .pipe(
                    this.takeUntilDestroy(),
                    filter((event) => this.elementRef?.nativeElement?.contains(event.target) !== true),
                )
                .subscribe(() => this.innoClickedOutside.emit());
        }
    }
}
