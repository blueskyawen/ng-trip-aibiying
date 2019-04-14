import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ExhibitPageModule } from '../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { PlusHomeDetailModule } from './plus-home-detail/plus-home-detail.module';
import { PlusHomeViewModule } from './plus-home-view/plus-home-view.module';
import { PlusHomePageRoutingModule } from './plus-home-page-routing.module';

import { PlusHomeComponent } from './plus-home.component';
import { PlusHomeListComponent } from './plus-home-list.component';
import { PlusHomeMainComponent } from './plus-home-main.component';
import { PlusSpecialHouseGroupComponent } from './plus-special-house-group.component';
import { PlusInpireGroupComponent } from './plus-inpire/plus-inpire-group.component';
import { PlusDestGroupComponent } from './plus-dest/plus-dest-group.component';
import { PlusDestListComponent } from './plus-dest/plus-dest-list.component';
import { PlusDestDetailComponent } from './plus-dest/plus-dest-detail.component';
import { PlusInpireDetailComponent } from './plus-inpire/plus-inpire-detail.component';

@NgModule({
  declarations: [PlusHomeComponent, PlusHomeListComponent, PlusHomeMainComponent, PlusDestGroupComponent,
    PlusSpecialHouseGroupComponent, PlusInpireGroupComponent, PlusDestListComponent, PlusDestDetailComponent,
    PlusInpireDetailComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, PlusHomePageRoutingModule, PlusHomeDetailModule, PlusHomeViewModule
  ]
})
export class PlusHomePageModule { }
