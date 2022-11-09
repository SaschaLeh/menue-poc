import {MenuActionType, MenuConfiguration} from "@framework/ui";

export const MESSTELLE_MENU_CONFIGURATION: Map<string, MenuConfiguration> = new Map([
    ["messstelle", {
        items: [
            {
                id: "messstelle1",
                header: "Messung 1",
                type: MenuActionType.Default,
                enabled: true,
                actionType: 'action1'
            },
            {
                id: "messstelleNeu",
                header: "Neu ",
                type: MenuActionType.Default,
                enabled: true,
                actionType: 'newAction'
            },
            {
                id: "messstelleDelete",
                header: "Löschen ",
                type: MenuActionType.Default,
                enabled: true,
                actionType: 'deleteAction'
            },
            {
                id: "messtelle2",
                header: "Messung 2",
                type: MenuActionType.Default,
                enabled: true,
                subItems: [
                    {
                        id: "subM1",
                        header: "Mess sub 1",
                        type: MenuActionType.Default,
                        enabled: true,
                        actionType: "subAction1"
                    },
                    {
                        id: "subM2",
                        header: "Mess sub 2",
                        type: MenuActionType.Default,
                        enabled: true,
                        actionType: "subAction2"
                    },

                ]
            },
        ],
        showDefaultActions: false
    }

    ],

]);
