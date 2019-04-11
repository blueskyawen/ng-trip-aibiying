/**
 * Created by root on 4/11/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePublishComponent } from './home-publish.component';
import { ShareExperienceComponent } from './share-experience.component';
import { KnowShareComponent } from './know-share.component';

const routes: Routes = [
    {
        path: 'selfCenter/share/know',
        component: KnowShareComponent
    },
    {
        path: 'selfCenter/share/exper',
        component: ShareExperienceComponent
    },
    {
        path: 'selfCenter/share/publish',
        component: HomePublishComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserShareRoutingModule { }
