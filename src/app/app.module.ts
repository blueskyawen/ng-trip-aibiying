import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';

import { HomePageModule } from './home-page/home-page.module';
import { StoryPageModule } from './story-page/story-page.module';
import { ExhibitPageModule } from './exhibit-page/exhibit-page.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, CoreModule, ShareModule, HomePageModule, StoryPageModule,
    ExhibitPageModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
