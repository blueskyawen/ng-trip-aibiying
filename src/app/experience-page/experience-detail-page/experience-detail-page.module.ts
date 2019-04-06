import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { ExperienceDetailPageRoutingModule } from './experience-detail-page-routing.module';

import { ExperienceDetailComponent } from './experience-detail.component';
import { ExperienceOverviewComponent } from './experience-overview.component';
import { ExperiencePhotosComponent } from './experience-photos.component';
import { ExperienceCommentsComponent } from './experience-comments.component';
import { ExperienceLocationComponent } from './experience-location.component';
import { ExperienceOrderComponent } from './experience-order.component';
import { ExperienceAttentionComponent } from './experience-attention.component';
import { ExperienceOthersComponent } from './experience-others.component';

@NgModule({
  declarations: [ExperienceDetailComponent, ExperienceOverviewComponent, ExperiencePhotosComponent, ExperienceCommentsComponent,
    ExperienceLocationComponent, ExperienceOrderComponent, ExperienceAttentionComponent, ExperienceOthersComponent],
  imports: [
    ShareModule, HomePageModule, ExhibitPageModule, ExperienceDetailPageRoutingModule
  ]
})
export class ExperienceDetailPageModule { }
