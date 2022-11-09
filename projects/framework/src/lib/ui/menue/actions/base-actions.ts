import {Context} from "@framework/core";
import {MenuAction} from "@framework/ui";

export class NewAction<T extends Context> implements MenuAction {

    type: string = "newAction"

    action(context: T): void {
        console.log("New base action performed - ", context)
    }
}

export class DeleteAction<T extends Context> implements MenuAction {

    type: string = "deleteAction"

    action(context: T): void {
        console.log("Delte base action performed", context)
    }
}
