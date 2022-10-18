import {InjectionToken} from "@angular/core";
import {MenuConfiguration} from "@framework/ui";

export const MenuConfigurationToken = new InjectionToken<Map<string, MenuConfiguration>>('Menu configurations');
