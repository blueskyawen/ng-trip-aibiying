import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ExhibitPageModule } from '../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { PlusHomePageRoutingModule } from './plus-home-page-routing.module'

import { PlusHomeComponent } from './plus-home.component';
import { PlusHomeGroupComponent } from './plus-home-group.component';
import { PlusHomeListComponent } from './plus-home-list.component';
import { PlusHomeDetailComponent } from './plus-home-detail.component';
import { PlusHomeMainComponent } from './plus-home-main.component';

@NgModule({
  declarations: [PlusHomeComponent, PlusHomeGroupComponent, PlusHomeListComponent,
    PlusHomeDetailComponent, PlusHomeMainComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, PlusHomePageRoutingModule
  ]
})
export class PlusHomePageModule { }