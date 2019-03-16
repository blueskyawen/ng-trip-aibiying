/**
 * Created by root on 3/9/19.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';

import { PageSearchComponent } from './page-search.component';
import { PageInspirationComponent } from './page-inspiration.component';
import { PageHousePlusComponent } from './page-house-plus.component';
import { PageClassicCityComponent } from './page-classic-city.component';
import { PageTripStoryComponent } from './page-trip-story.component';
import { PageHighExperienceComponent } from './page-high-experience.component';
import { PageContactComponent } from './page-contact.component';
import { PageHotCityComponent } from './page-hot-city.component';


@NgModule({
    declarations: [PageSearchComponent, PageInspirationComponent, PageHousePlusComponent, PageClassicCityComponent,
        PageTripStoryComponent, PageHighExperienceComponent, PageContactComponent, PageHotCityComponent],
    imports: [
        ShareModule
    ],
    exports: [PageSearchComponent, PageInspirationComponent, PageHousePlusComponent,
        PageClassicCityComponent, PageTripStoryComponent, PageHighExperienceComponent,
        PageContactComponent, PageHotCityComponent]
})
export class PageContentModule { }
