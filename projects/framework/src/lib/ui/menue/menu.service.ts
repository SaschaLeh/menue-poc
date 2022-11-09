import {Injectable, Injector, Optional} from '@angular/core';
import {startWith} from "rxjs";
import {ActionHandler, MenuActionToken, MenuConfiguration, MenuConfigurationToken, MenuItem} from "@framework/ui";
import {HttpClient} from "@angular/common/http";
import {Context} from "@framework/core";

@Injectable({providedIn: 'root'})
export class MenuService {

    private menuConfiguration: Map<string, MenuConfiguration> = new Map<string, MenuConfiguration>();

    constructor(private injector: Injector, private httpClient: HttpClient, @Optional() private readonly actionHandler: ActionHandler<Context>) {
        const configuration = this.injector.get(MenuConfigurationToken);
        if (configuration.size > 0) {
            this.menuConfiguration = configuration;
        }
    }

    public async getMenuConfiguration(context: Context): Promise<MenuConfiguration> {

        let menuConfig = this.menuConfiguration.get(context.type) ?? {items: [], showDefaultActions: false};
        const endpointInfo = context.links.find(({attribution}) => context.type === attribution);

        if (!!endpointInfo) {
            const apiMenuItems = await this.httpClient.get<MenuItem[]>(endpointInfo.href).pipe(startWith([])).toPromise();

            if (menuConfig && apiMenuItems) {
                menuConfig.items = [...menuConfig.items, ...apiMenuItems];
            }

            return menuConfig;

        } else {
            return menuConfig;
        }
    }

    public async performActionCurrent(actionType: string, context: Context): Promise<void> {
        const actions = this.injector.get(MenuActionToken);
        const selectedAction = actions.find(a => a.type === actionType);
        if (selectedAction) {
            selectedAction.action(context);
        }
    }

    public async performActionFromHandler(actionType: string, context: Context): Promise<void> {
        await this.actionHandler.processAction(actionType, context)
    }

}
