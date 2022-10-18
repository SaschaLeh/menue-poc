import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MenuConfiguration} from "@framework/ui";
import {MenuConfigurationToken} from "./menu-configuartion.token";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MenuConfigurationService {

    private menuConfiguration$$ = new BehaviorSubject<Map<string, MenuConfiguration>>(new Map<string, MenuConfiguration>([]));
    private menuConfiguration$ = this.menuConfiguration$$.asObservable();

    constructor(private injector: Injector) {
        const configuration = this.injector.get(MenuConfigurationToken);
        if (configuration.size > 0) {
            this.menuConfiguration$$.next(configuration);
        }
    }

    public getMenuConfiguration(menuId: string): Observable<MenuConfiguration | undefined> {
        return this.menuConfiguration$.pipe(map((configuration) => {
            return configuration.get(menuId)
        }))
    }

    public updateMenuConfiguration(menuId: string, updatedConfiguration: MenuConfiguration): void {
        let currenConfig = this.menuConfiguration$$.value;
        currenConfig.set(menuId, updatedConfiguration);
        this.menuConfiguration$$.next(currenConfig)
    }


}
