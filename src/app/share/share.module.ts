import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibModule } from 'ng-shadow-cat-d';
import { TripStoryCardComponent } from './trip-story-card/trip-story-card.component';
import { HotCityHouseCardComponent } from './hot-city-house-card/hot-city-house-card.component';
import { HighExpertenceCardComponent } from './high-expertence-card/high-expertence-card.component';
import { PlayCardComponent } from './play-card/play-card.component';

@NgModule({
  declarations: [TripStoryCardComponent, HotCityHouseCardComponent, HighExpertenceCardComponent,
    PlayCardComponent],
  imports: [
    CommonModule, LibModule
  ],
  exports: [LibModule, CommonModule, HttpClientModule, RouterModule, FormsModule,
    TripStoryCardComponent, HotCityHouseCardComponent, HighExpertenceCardComponent, PlayCardComponent]
})
export class ShareModule { }
