import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { StoryPageRoutingModule } from './story-page-routing.module';

import { HomePageModule } from '../home-page/home-page.module';

import { StoryPageComponent } from './story-page.component';
import { StoryRecomendComponent } from './story-recomend.component';
import { StoryAlbumComponent } from './story-album.component';

@NgModule({
  declarations: [StoryPageComponent, StoryRecomendComponent, StoryAlbumComponent],
  imports: [
    ShareModule, StoryPageRoutingModule, HomePageModule
  ]
})
export class StoryPageModule { }
