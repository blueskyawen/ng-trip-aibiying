import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicCityPageRoutingModule } from './classic-city-page-routing.module';
import { CityHousesComponent } from './city-houses.component';
import { CityExperiencesComponent } from './city-experiences.component';
import { CityHomeComponent } from './city-home.component';

@NgModule({
  declarations: [CityHousesComponent, CityExperiencesComponent, CityHomeComponent],
  imports: [
    CommonModule,
    ClassicCityPageRoutingModule
  ]
})
export class ClassicCityPageModule { }
