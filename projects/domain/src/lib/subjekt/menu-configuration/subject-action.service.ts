import {Injectable} from '@angular/core';
import {ActionHandler} from "@framework/ui";
import {Context} from "@framework/core";

@Injectable()
export class SubjectActionService extends ActionHandler<Context> {

    constructor() {
        super();
    }

    async processAction(actionType: string, context: Context): Promise<boolean> {
        switch (actionType) {
            case 'action1':
                console.log("action 1 from Handler");
                return true;
            case 'fuba':
                console.log("fuba from Handler");
                return true;
            case 'fuba1':
                console.log("fuba1 from Handler");
                return true;
            case 'second':
                console.log("second from Handler");
                return true;
            default:
                return false;
        }
    }
}
