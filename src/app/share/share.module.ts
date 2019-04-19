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
import { FalityIconComponent } from './fality-icon/fality-icon.component';
import { RoomerSetCardComponent } from './roomer-set-card/roomer-set-card.component';
import { PlusDestCardComponent } from './plus-dest-card/plus-dest-card.component';
import { PlusSpecialHouseCardComponent } from './plus-special-house-card/plus-special-house-card.component';
import { PlusInpireCardComponent } from './plus-inpire-card/plus-inpire-card.component';
import { PlusHouseCardComponent } from './plus-house-card/plus-house-card.component';
import { PageWaitingComponent } from './page-waiting/page-waiting.component';
import { ShareExperCardComponent } from './share-exper-card/share-exper-card.component';

@NgModule({
  declarations: [TripStoryCardComponent, HotCityHouseCardComponent, HighExpertenceCardComponent,
    PlayCardComponent, FalityIconComponent, RoomerSetCardComponent, PlusDestCardComponent,
    PlusSpecialHouseCardComponent, PlusInpireCardComponent, PlusHouseCardComponent, PageWaitingComponent,
    ShareExperCardComponent],
  imports: [
    CommonModule, LibModule, RouterModule
  ],
  exports: [LibModule, CommonModule, HttpClientModule, RouterModule, FormsModule,
    TripStoryCardComponent, HotCityHouseCardComponent, HighExpertenceCardComponent, PlayCardComponent,
    FalityIconComponent, RoomerSetCardComponent, PlusDestCardComponent, PlusSpecialHouseCardComponent,
    PlusInpireCardComponent, PlusHouseCardComponent, PageWaitingComponent, ShareExperCardComponent]
})
export class ShareModule { }
