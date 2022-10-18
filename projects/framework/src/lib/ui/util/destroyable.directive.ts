import { Directive, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive()
export abstract class Destroyable implements OnDestroy {
    private destroy$$?: Subject<void>;

    public ngOnDestroy(): void {
        if (this.destroy$$) {
            this.destroy$$.next();
            this.destroy$$.complete();
        }
    }

    /**
     * Funktion für das automatische unsubscribe, falls die async-Pipe nicht verwendet werden kann
     *
     * @returns {MonoTypeOperatorFunction} Funktion
     */
    protected takeUntilDestroy = <T>(): MonoTypeOperatorFunction<T> => {
        if (!this.destroy$$) {
            this.destroy$$ = new Subject<void>();
        }

        return takeUntil<T>(this.destroy$$);
    };
}
