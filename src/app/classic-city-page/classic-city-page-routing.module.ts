import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityHomeComponent} from './city-home.component';

const routes: Routes = [
  {
    path: 'city/:id',
    component: CityHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassicCityPageRoutingModule { }
