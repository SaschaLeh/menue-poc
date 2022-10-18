import {MenuActionType, MenuConfiguration} from "@framework/ui";

export const SUBJECT_MENU_CONFIGURATION: Map<string, MenuConfiguration> = new Map([
    ["main", {
        actions: [
            {
                id: "test1",
                header: "Test 1",
                type: MenuActionType.Default,
                enabled: true
            },
            {
                id: "test2",
                header: "Test 2",
                type: MenuActionType.Default,
                enabled: true,
                subActions: [
                    {
                        id: "sub1",
                        header: "Sub 1",
                        type: MenuActionType.Default,
                        enabled: true
                    },
                    {
                        id: "sub2",
                        header: "Sub 2",
                        type: MenuActionType.Default,
                        enabled: true
                    },

                ]
            },
        ],
        showDefaultActions: false
    }],
]);
