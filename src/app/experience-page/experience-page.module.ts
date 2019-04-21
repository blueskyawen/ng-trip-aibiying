import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HomePageModule } from '../home-page/home-page.module';
import { ExhibitPageModule } from '../exhibit-page/exhibit-page.module';
import { ExperienceDetailPageModule } from './experience-detail-page/experience-detail-page.module';

import { ExperiencePageRoutingModule } from './experience-page-routing.module';
import { ExperienceHomeComponent } from './experience-home.component';
import { ExperienceListComponent } from './experience-list.component';
import { ExperienceCategoryComponent } from './experience-category.component';
import { ExperienceThemeComponent } from './experience-theme.component';
import { ExperienceCancelPolicyComponent } from './experience-cancel-policy.component';

@NgModule({
  declarations: [ExperienceHomeComponent, ExperienceListComponent,
    ExperienceCategoryComponent, ExperienceThemeComponent, ExperienceCancelPolicyComponent],
  imports: [
    ShareModule, HomePageModule, ExhibitPageModule,
    ExperiencePageRoutingModule, ExperienceDetailPageModule
  ],
  exports: [ExperienceCategoryComponent]
})
export class ExperiencePageModule { }
