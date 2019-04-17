import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { PublishHouseModule } from './publish-house/publish-house.module';
import { UserShareRoutingModule } from './user-share-routing.module';

import { HomePublishComponent } from './home-publish.component';
import { ShareExperienceComponent } from './share-experience.component';
import { KnowShareComponent } from './know-share.component';
import { BecomeHosterComponent } from './become-hoster.component';

@NgModule({
  declarations: [HomePublishComponent, ShareExperienceComponent, KnowShareComponent,
    BecomeHosterComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, PublishHouseModule,
    UserShareRoutingModule
  ]
})
export class UserShareModule { }
