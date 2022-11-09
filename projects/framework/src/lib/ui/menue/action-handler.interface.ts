import {Context} from "@framework/core";
import {Injectable} from "@angular/core";

@Injectable()
export abstract class ActionHandler<T extends Context> {
    abstract processAction(actionType: string, context: T): Promise<boolean>;
}
