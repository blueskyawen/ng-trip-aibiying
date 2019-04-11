/**
 * Created by root on 4/11/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data.component';

const routes: Routes = [
    {
        path: 'selfCenter/userData',
        component: UserDataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDataRoutingModule { }
