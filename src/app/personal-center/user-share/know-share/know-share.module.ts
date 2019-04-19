import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { ExhibitPageModule } from '../../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../../home-page/home-page.module';

import { KnowShareRoutingModule } from './know-share-routing.module';

import { KnowShareComponent } from './know-share.component';
import { KnowShareHeadComponent } from './know-share-head.component';
import { KnowShareBodyComponent } from './know-share-body.component';

@NgModule({
  declarations: [KnowShareComponent, KnowShareHeadComponent, KnowShareBodyComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule,
    KnowShareRoutingModule
  ]
})
export class KnowShareModule { }
