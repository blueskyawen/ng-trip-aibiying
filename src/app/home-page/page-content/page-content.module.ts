/**
 * Created by root on 3/9/19.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HotCityModule } from './hot-city/hot-city.module';
import { PageSearchComponent } from './page-search.component';
import { PageInspirationComponent } from './page-inspiration.component';
import { PageHousePlusComponent } from './page-house-plus.component';
import { PageClassicCityComponent } from './page-classic-city.component';
import { PageTripStoryComponent } from './page-trip-story.component';
import { PageHighExperienceComponent } from './page-high-experience.component';


@NgModule({
    declarations: [PageSearchComponent, PageInspirationComponent, PageHousePlusComponent, PageClassicCityComponent,
        PageTripStoryComponent, PageHighExperienceComponent],
    imports: [
        ShareModule
    ],
    exports: [PageSearchComponent, HotCityModule, PageInspirationComponent, PageHousePlusComponent,
        PageClassicCityComponent, PageTripStoryComponent, PageHighExperienceComponent]
})
export class PageContentModule { }
