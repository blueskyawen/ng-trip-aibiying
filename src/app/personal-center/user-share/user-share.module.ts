import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { PublishHouseModule } from './publish-house/publish-house.module';
import { KnowShareModule } from './know-share/know-share.module';
import { ShareExperModule } from './share-exper/share-exper.module';
import { UserShareRoutingModule } from './user-share-routing.module';

import { HomePublishComponent } from './home-publish.component';
import { BecomeHosterComponent } from './become-hoster.component';

@NgModule({
  declarations: [HomePublishComponent, BecomeHosterComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, PublishHouseModule, KnowShareModule,
    ShareExperModule, UserShareRoutingModule
  ]
})
export class UserShareModule { }
