import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';

import { PlusHomeViewComponent } from './plus-home-view.component';
import { PlusHomeViewRoutingModule } from './plus-home-view-routing.module';
import { PlusViewTitleComponent } from './plus-view-title.component';
import { PlusViewResourceComponent } from './plus-view-resource.component';
import { PlusViewOwnerComponent } from './plus-view-owner.component';
import { PlusViewQualityComponent } from './plus-view-quality.component';
import { PlusViewPickComponent } from './plus-view-pick.component';

@NgModule({
  declarations: [PlusHomeViewComponent, PlusViewTitleComponent, PlusViewResourceComponent, PlusViewOwnerComponent,
    PlusViewQualityComponent, PlusViewPickComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule,
    PlusHomeViewRoutingModule
  ]
})
export class PlusHomeViewModule { }
