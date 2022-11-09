import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessstelleDetailComponent} from "./messstelle-detail/messstelle-detail.component";

const routes: Routes = [
    {path: '', component: MessstelleDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessstelleRoutingModule {
}
