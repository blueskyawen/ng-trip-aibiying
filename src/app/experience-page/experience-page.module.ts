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

@NgModule({
  declarations: [ExperienceHomeComponent, ExperienceListComponent,
    ExperienceCategoryComponent, ExperienceThemeComponent],
  imports: [
    ShareModule, HomePageModule, ExhibitPageModule, ExperienceDetailPageModule,
    ExperiencePageRoutingModule
  ]
})
export class ExperiencePageModule { }
