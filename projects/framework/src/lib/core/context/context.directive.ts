import {Directive, Input, OnInit} from '@angular/core';
import {Context} from './context.interface';

/**
 * Directive um anderen Directives das Context-Objects {@link Context} via Dependency Injection bereitzustellen
 */
@Directive({
    selector: '[appContext]',
})
export class ContextDirective<T extends Context = any> implements OnInit {
    /**
     * Context Objekt welches auf unteren ebenen zur Referenz und Auflösung genutzt wird.
     */
    @Input() public innoContext!: T;

    /**
     * Feld-Referenz zur generischen Identifizierung des types
     */
    @Input() public contextPropertyField: keyof T = 'type';

    constructor() {
    }

    /**
     * Context type Angabe
     */
    public get type(): unknown {
        return this.innoContext[this.contextPropertyField];
    }

    public ngOnInit(): void {
        if (this.innoContext[this.contextPropertyField] === undefined) {
            console.error("ERROR: No Context!")
        }
    }
}
