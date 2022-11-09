import {Context} from "@framework/core";
import {MenuAction} from "@framework/ui";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class Action1<T extends Context> implements MenuAction {

    type: string = "action1"

    constructor(private router: Router) {
    }

    action(context: T): void {
        console.log("Action 1 performed - ", context)
        this.router.navigate(['subject'])
    }
}

@Injectable()
export class SubAction1<T extends Context> implements MenuAction {

    type: string = "subAction1"

    action(context: T): void {
        console.log("SubAction 1 performed - ", context)
    }
}

@Injectable()
export class SubAction2<T extends Context> implements MenuAction {

    type: string = "subAction2"

    action(context: T): void {
        console.log("SubAction 2 performed - ", context)
    }
}

@Injectable()
export class MessstelleDelete<T extends Context> implements MenuAction {

    type: string = "deleteAction" //Override der Basis Aktion durch Verwendung des selben Typs

    action(context: T): void {
        console.log("Delete override performed", context)
    }
}
