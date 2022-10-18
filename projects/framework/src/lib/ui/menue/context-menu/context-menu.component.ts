import {ChangeDetectionStrategy, Component, ContentChild, OnInit, Optional, TemplateRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {InnoComponent} from "../../util/inno.component";
import {ContextDirective} from "../../../core/context/context.directive";
import {MenuItem} from "@framework/ui";

/**
 * Menu welches via Dependency Injection über die {@link ContextDirective} ein  Context {@link Context  Object bekommt.
 * Anhand des Context wir dann ein Menu generiert.
 * Um auf Klicks zu reagieren müssen zusätzlich noch Actions {@link ContextMenuAction} via multi Injection Token bereitgestellt werden.
 */
@Component({
    selector: 'app-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent extends InnoComponent implements OnInit {
    /**
     * Mit einem template kann via view projection der standard Toggle-Button ersätzt werden.
     * `<inno-context-menu> <ng-template #toggle> Ersatz hier </ng-template> </inno-context-menu>`
     */
    @ContentChild('toggle', {read: TemplateRef}) public readonly triggerTemplate?: TemplateRef<any>;

    /**
     * Observables welches die Items für das Dropdown Menu enthält. Wird via einem Service-Request bei jedem öffnen neu befüllt.
     */
    public nestedMenuItems$: Observable<MenuItem[]>;
    /**
     * Observables welches die Items für die einfachen Buttons enthält. Wird via einem Service-Request bei jedem öffnen neu befüllt.
     */
    public singleMenuItems$: Observable<MenuItem[]>;

    /**
     * Gibt an ob das Menu geöffnet oder geschlossen ist.
     */
    public isOpen = false;
    private readonly menuItems$$: Subject<ContextMenuItem[]>;

    constructor(
        private readonly contextMenuService: ContextMenuService,
        @Optional() private readonly contextDirective?: ContextDirective,
    ) {
        super();
        this.menuItems$$ = new Subject<ContextMenuItem[]>();
        this.nestedMenuItems$ = this.menuItems$$.pipe(map((items) => items.filter((item) => item)));
        this.singleMenuItems$ = this.menuItems$$.pipe(map((items) => items.filter((item) => item.displayType === 'single')));
    }

    /**
     * Gibt an ob ein Menü angezeigt werden kann. Bedingung ist, dass ausserhalb eine MenuContextDirective verwendet wird, welche
     * einen Context enthält anhand dessen das Menu erstellt werden kann.
     */
    public get contextIsAvailable(): boolean {
        return this.contextDirective !== undefined && this.contextDirective !== null;
    }

    public async ngOnInit(): Promise<void> {
        await this.load();
    }

    /**
     * Öffne und schliesse das Menu
     * @param open gibt an welcher state eingenommen werden soll
     */
    public async toggle(event: MouseEvent, open = false): Promise<false> {
        event.preventDefault();
        event.stopPropagation();

        if (open) {
            await this.load();
        }
        this.isOpen = open;

        return false;
    }

    /**
     * Handhabt Menu-Item-Klicks.
     * Wird ein Menu Item geklickt, wählt diese Methode im Hintergrund die richte Aktion via einem Service aus und führt dann
     * ggf. anfallende Aktionen aus. Dabei wird der Context der ContextDirective mit an die Aktion übergeben.
     * @param item Informationen über das geklickte Menu Item. Wird genutzt um die Action zu identifizieren.
     */
    public async onItemClick(event: Event, item: ContextMenuItem): Promise<boolean> {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const actions = this.contextMenuService.getActions(item.actionType);
        if (!actions.length) {
            this.errorService.warn(`No action provided for this menu item: ${item.label} ${item.actionType}`);
        }

        await Promise.all(actions.map((action) => action.action(this.contextDirective?.innoContext)));
        return false;
    }

    private async load(): Promise<void> {
        if (this.contextDirective !== undefined && this.contextDirective !== null) {
            const items = await this.contextMenuService.getItems(this.contextDirective.type, this.contextDirective.innoContext);
            this.menuItems$$.next(items);
        }
    }
}
