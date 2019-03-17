import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { HomePageModule } from '../home-page/home-page.module';

import { ExhibitPageRoutingModule } from './exhibit-page-routing.module';
import { ExhibitPageComponent } from './exhibit-page.component';
import { ExhibitSelectComponent } from './exhibit-select.component';
import { PlayListPageComponent } from './play-list-page.component';

@NgModule({
  declarations: [ExhibitPageComponent, ExhibitSelectComponent, PlayListPageComponent],
  imports: [
    ShareModule,
    ExhibitPageRoutingModule, HomePageModule
  ]
})
export class ExhibitPageModule { }
