/**
 * Created by root on 3/9/19.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HotCityModule } from './hot-city/hot-city.module';
import { PageSearchComponent } from './page-search.component';


@NgModule({
    declarations: [PageSearchComponent],
    imports: [
        ShareModule
    ],
    exports: [PageSearchComponent,HotCityModule]
})
export class PageContentModule { }
