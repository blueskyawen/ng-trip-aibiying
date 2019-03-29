/**
 * Created by root on 3/23/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlusHomeComponent } from './plus-home.component';
import { PlusHomeMainComponent } from './plus-home-main.component';
import { PlusDestListComponent } from './plus-dest/plus-dest-list.component';
import { PlusDestDetailComponent } from './plus-dest/plus-dest-detail.component';
import { PlusInpireDetailComponent } from './plus-inpire/plus-inpire-detail.component';

const routes: Routes = [
    {
        path: 'plus',
        component: PlusHomeComponent,
        children: [
            {
                path: 'main',
                component: PlusHomeMainComponent
            },
            {
                path: 'destination',
                component: PlusDestListComponent
            },
            {
                path: 'destination/:id',
                component: PlusDestDetailComponent
            },
            {
                path: 'inspire/:id',
                component: PlusInpireDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlusHomePageRoutingModule { }
