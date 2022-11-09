import {InjectionToken} from '@angular/core';
import {MenuAction} from "@framework/ui";

/**
 */
export const MenuActionToken = new InjectionToken<MenuAction[]>('Menu item action');
