import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';

import { HomePageModule } from './home-page/home-page.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, ShareModule, HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
