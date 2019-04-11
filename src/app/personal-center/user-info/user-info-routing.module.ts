/**
 * Created by root on 4/11/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserShowComponent } from './user-show.component';
import { UserEditComponent } from './user-edit.component';

const routes: Routes = [
    {
        path: 'selfCenter/user/show',
        component: UserShowComponent
    },
    {
        path: 'selfCenter/user/edit',
        component: UserEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserInfoRoutingModule { }
