import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { HomePageModule } from '../home-page/home-page.module';
import { PlayListPageModule } from './play-list-page/play-list-page.module';
import { HouseListPageModule } from './house-list-page/house-list-page.module';

import { ExhibitPageRoutingModule } from './exhibit-page-routing.module';
import { ExhibitPageComponent } from './exhibit-page.component';
import { ExhibitSelectComponent } from './exhibit-select.component';

@NgModule({
  declarations: [ExhibitPageComponent, ExhibitSelectComponent],
  imports: [
    ShareModule,
    ExhibitPageRoutingModule, HomePageModule, PlayListPageModule, HouseListPageModule
  ]
})
export class ExhibitPageModule { }
