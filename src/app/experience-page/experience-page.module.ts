import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencePageRoutingModule } from './experience-page-routing.module';
import { ExperienceHomeComponent } from './experience-home.component';
import { ExperienceListComponent } from './experience-list.component';
import { ExperienceDetailComponent } from './experience-detail.component';
import { ExperienceCategoryComponent } from './experience-category.component';
import { ExperienceThemeComponent } from './experience-theme.component';

@NgModule({
  declarations: [ExperienceHomeComponent, ExperienceListComponent, ExperienceDetailComponent,
    ExperienceCategoryComponent, ExperienceThemeComponent],
  imports: [
    CommonModule,
    ExperiencePageRoutingModule
  ]
})
export class ExperiencePageModule { }
