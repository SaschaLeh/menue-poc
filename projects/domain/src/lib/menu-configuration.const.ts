import {MenuConfiguration} from "@framework/ui";
import {SUBJECT_MENU_CONFIGURATION} from "./subjekt/menu-configuration/subject-menu-configuration.const.";
import {MESSTELLE_MENU_CONFIGURATION} from "./messstelle/menu-configuration/messstelle-menu-configuration.const";

export const MENU_CONFIGURATION: Map<string, MenuConfiguration> = new Map([
    ...MESSTELLE_MENU_CONFIGURATION,
    ...SUBJECT_MENU_CONFIGURATION
]);
