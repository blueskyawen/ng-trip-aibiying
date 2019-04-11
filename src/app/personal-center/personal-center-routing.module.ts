/**
 * Created by root on 4/11/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInviteComponent } from './user-invite.component';
import { UserWishsComponent } from './user-wishs.component';
import { UserTripGuideComponent } from './user-trip-guide.component';
import { UserWorkManageComponent } from './user-work-manage.component';
import { MyJourneyComponent } from './my-journey.component';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserInfoBoxComponent } from './user-info-box.component';


const routes: Routes = [
    {
        path: 'selfCenter',
        children: [
            {
                path: 'wishs',
                component: UserWishsComponent
            },
            {
                path: 'invite',
                component: UserInviteComponent
            },
            {
                path: 'myJourney',
                component: MyJourneyComponent
            },
            {
                path: 'dashboard',
                component: UserDashboardComponent
            },
            {
                path: 'infoBox',
                component: UserInfoBoxComponent
            },
            {
                path: 'workManage',
                component: UserWorkManageComponent
            },
            {
                path: 'trpGuide',
                component: UserTripGuideComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonalCenterRoutingModule { }
