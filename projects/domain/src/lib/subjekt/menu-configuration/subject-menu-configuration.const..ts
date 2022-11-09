import {MenuActionType, MenuConfiguration} from "@framework/ui";

export const SUBJECT_MENU_CONFIGURATION: Map<string, MenuConfiguration> = new Map([
    ["main", {
        items: [
            {
                id: "test1",
                header: "Test 1",
                type: MenuActionType.Default,
                enabled: true,
                actionType: "action1"
            },
            {
                id: "test2",
                header: "Test 2",
                type: MenuActionType.Default,
                enabled: true,
                actionType: "action2"
            },

        ],
        showDefaultActions: false
    }

    ],
    ["second", {
        items: [
            {
                id: "test3",
                header: "Test 3",
                type: MenuActionType.Default,
                enabled: true,
                subItems: [
                    {
                        id: "sub1",
                        header: "Sub 1",
                        type: MenuActionType.Default,
                        enabled: true,
                        actionType: "subAction1"
                    },
                    {
                        id: "sub2",
                        header: "Sub 2",
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
