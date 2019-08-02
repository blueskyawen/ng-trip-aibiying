import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';

import { HomePageModule } from './home-page/home-page.module';
import { StoryPageModule } from './story-page/story-page.module';
import { ExhibitPageModule } from './exhibit-page/exhibit-page.module';
import { PlusHomePageModule } from './plus-home-page/plus-home-page.module';
import { ClassicCityPageModule } from './classic-city-page/classic-city-page.module';
import { ExperiencePageModule } from './experience-page/experience-page.module';
import { PersonalCenterModule } from './personal-center/personal-center.module';
import { BaiduMapModule } from 'angular2-baidu-map';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, CoreModule, ShareModule, HomePageModule, StoryPageModule,
    ExhibitPageModule, PlusHomePageModule, ClassicCityPageModule, ExperiencePageModule,
    PersonalCenterModule, AppRoutingModule,
    BaiduMapModule.forRoot({ak:'je9h7EOx3mZk3HwLOUZBRr59yGpYUvY1'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
