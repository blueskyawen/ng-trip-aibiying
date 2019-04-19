import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareExperienceComponent } from './share-experience.component';

const routes: Routes = [
  {
    path: 'selfCenter/share/exper',
    component: ShareExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareExperRoutingModule { }
