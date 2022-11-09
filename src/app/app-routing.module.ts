import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'subject', pathMatch: 'full'},
    {
        path: 'subject',
        loadChildren: () => import('../../projects/domain/src/lib/subjekt/subjekt.module').then(m => m.SubjektModule)
    },
    {
        path: 'messstelle',
        loadChildren: () => import('../../projects/domain/src/lib/messstelle/messstelle.module').then(m => m.MessstelleModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
