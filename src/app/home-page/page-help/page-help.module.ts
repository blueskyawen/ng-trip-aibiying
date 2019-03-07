import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { PageHelpComponent } from './page-help.component';
import { PageHelpDetailComponent } from './page-help-detail.component';

@NgModule({
  declarations: [PageHelpComponent, PageHelpDetailComponent],
  imports: [
    ShareModule
  ],
  exports: [PageHelpComponent]
})
export class PageHelpModule { }
