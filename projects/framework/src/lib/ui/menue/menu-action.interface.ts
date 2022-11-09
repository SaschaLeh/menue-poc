import {Context} from "@framework/core";
import {MenuActionToken} from "./menu-action.token";
import {Type} from "@angular/core";

/**
 * Action die von der {@link ContextMenuComponent} ausgelöst wird. Wird via DI für den {@link ContextMenuService} bereitgestellt.
 */

export interface MenuAction<T extends Context = any> {
    /**
     * Wird genutzt, um die action zu filtern.
     */
    type: string;

    /**
     * Effekt der Action. Wird aufgerufen sobald die Action ausgeführt werden soll.
     */
    action: (context: T) => void | Promise<void>;
}


export const MENU_ACTION_FACTORY = (menuAction: Type<any>) => {
    return {
        provide: MenuActionToken,
        multi: true,
        useClass: menuAction
    }
}
