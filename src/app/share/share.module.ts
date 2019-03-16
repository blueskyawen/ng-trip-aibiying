import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibModule } from 'ng-shadow-cat-d';
import { TripStoryCardComponent } from './trip-story-card/trip-story-card.component';

@NgModule({
  declarations: [TripStoryCardComponent],
  imports: [
    CommonModule, LibModule
  ],
  exports: [LibModule, CommonModule, HttpClientModule, RouterModule, FormsModule,
    TripStoryCardComponent]
})
export class ShareModule { }
