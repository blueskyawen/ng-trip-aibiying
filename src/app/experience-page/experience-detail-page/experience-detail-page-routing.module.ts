import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExperienceDetailComponent} from './experience-detail.component';

const routes: Routes = [
    {
        path: 'experience/:id',
        component: ExperienceDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperienceDetailPageRoutingModule { }
