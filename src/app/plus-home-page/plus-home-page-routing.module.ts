/**
 * Created by root on 3/23/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlusHomeComponent } from './plus-home.component';
import { PlusHomeDetailComponent } from './plus-home-detail.component';
import { PlusHomeMainComponent } from './plus-home-main.component';

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
                component: PlusHomeMainComponent
            },
            {
                path: 'inspire',
                component: PlusHomeMainComponent
            }
        ]
    },
    {
        path: 'plus/home/:id',
        component: PlusHomeDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlusHomePageRoutingModule { }
