/**
 * Created by root on 3/4/19.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { PageHeadComponent } from './page-head.component';
import { PageCarouselComponent } from './page-carousel.component';
import { PageFootComponent } from './page-foot.component';

@NgModule({
    declarations: [PageHeadComponent, PageCarouselComponent, PageFootComponent],
    imports: [
        CommonModule, ShareModule
    ],
    exports: [PageHeadComponent, PageCarouselComponent, PageFootComponent]
})
export class HomePageModule { }
