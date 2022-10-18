import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'subject', pathMatch: 'full'},
    {
        path: 'subject',
        loadChildren: () => import('../../projects/domain/src/lib/subjekt/subjekt.module').then(m => m.SubjektModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
