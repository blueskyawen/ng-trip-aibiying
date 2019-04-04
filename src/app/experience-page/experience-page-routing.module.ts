import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExperienceHomeComponent} from './experience-home.component';
import {ExperienceListComponent} from './experience-list.component';
import {ExperienceDetailComponent} from './experience-detail.component';

const routes: Routes = [
  {
    path: 'experience',
    children: [
      {
        path: 'home',
        component: ExperienceHomeComponent
      },
      {
        path: 'list/:type',
        component: ExperienceListComponent
      },
      {
        path: ':id',
        component: ExperienceDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencePageRoutingModule { }
