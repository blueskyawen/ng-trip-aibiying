import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';

import { PageHeadModule } from './page-head/page-head.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, ShareModule, PageHeadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
