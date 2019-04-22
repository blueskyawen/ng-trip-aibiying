/**
 * Created by root on 4/22/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserWishsComponent } from './user-wishs.component';

const routes: Routes = [
    {
        path: 'selfCenter/wishs',
        component: UserWishsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserWishsRoutingModule { }
