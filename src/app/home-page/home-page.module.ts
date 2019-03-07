/**
 * Created by root on 3/4/19.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { HomePageRoutingModule } from './home-page-routing.module';
import { PageHelpModule } from './page-help/page-help.module';

import { PageHeadComponent } from './page-head.component';
import { PageCarouselComponent } from './page-carousel.component';
import { PageFootComponent } from './page-foot.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [PageHeadComponent, PageCarouselComponent, PageFootComponent, HomePageComponent],
    imports: [
        ShareModule, HomePageRoutingModule, PageHelpModule
    ],
    exports: [HomePageComponent]
})
export class HomePageModule { }
