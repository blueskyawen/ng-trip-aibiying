import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { ExhibitPageModule } from '../../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../../home-page/home-page.module';
import { ExperiencePageModule } from '../../../experience-page/experience-page.module';

import { ShareExperRoutingModule } from './share-exper-routing.module';

import { ShareExperienceComponent } from './share-experience.component';
import { ExperOverviewComponent } from './exper-overview.component';
import { ExperCommunityComponent } from './exper-community.component';
import { ExperGuideComponent } from './exper-guide.component';
import { ExperOthersComponent } from './exper-others.component';

@NgModule({
  declarations: [ShareExperienceComponent, ExperOverviewComponent, ExperCommunityComponent,
    ExperGuideComponent, ExperOthersComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, ExperiencePageModule,
    ShareExperRoutingModule
  ]
})
export class ShareExperModule { }
