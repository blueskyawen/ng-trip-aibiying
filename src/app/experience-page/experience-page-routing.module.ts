import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExperienceHomeComponent} from './experience-home.component';
import {ExperienceListComponent} from './experience-list.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencePageRoutingModule { }
