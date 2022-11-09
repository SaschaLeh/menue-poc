export enum MenuActionType {
    Default,
    Route,
    Workflow
}

export interface MenuItem {
    id: string;
    header: string;
    type: MenuActionType;
    shortcuts?: string[],
    icon?: string;
    enabled: boolean;
    data?: unknown;
    subItems?: MenuItem[];
    permissions?: string[];
    actionType?: string;
}
