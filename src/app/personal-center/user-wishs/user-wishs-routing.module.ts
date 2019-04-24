/**
 * Created by root on 4/22/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserWishsComponent } from './user-wishs.component';
import { HotWishListComponent } from './hot-wish-list.component';

const routes: Routes = [
    {
        path: 'selfCenter/wishs',
        component: UserWishsComponent
    },
    {
        path: 'selfCenter/hot-wishs',
        component: HotWishListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserWishsRoutingModule { }
