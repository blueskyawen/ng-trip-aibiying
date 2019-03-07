import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { PageHelpComponent } from './page-help.component';

@NgModule({
  declarations: [PageHelpComponent],
  imports: [
    ShareModule
  ],
  exports: [PageHelpComponent]
})
export class PageHelpModule { }
