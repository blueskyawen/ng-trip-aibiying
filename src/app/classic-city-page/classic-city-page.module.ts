import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HomePageModule } from '../home-page/home-page.module';
import { ExhibitPageModule } from '../exhibit-page/exhibit-page.module';

import { ClassicCityPageRoutingModule } from './classic-city-page-routing.module';
import { CityHousesComponent } from './city-houses.component';
import { CityExperiencesComponent } from './city-experiences.component';
import { CityHomeComponent } from './city-home.component';
import { CityHeadComponent } from './city-head.component';

@NgModule({
  declarations: [CityHousesComponent, CityExperiencesComponent, CityHomeComponent,
    CityHeadComponent],
  imports: [
    ShareModule, HomePageModule, ExhibitPageModule,
    ClassicCityPageRoutingModule
  ]
})
export class ClassicCityPageModule { }
