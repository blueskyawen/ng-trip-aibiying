import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';

import { PlayListPageComponent } from './play-list-page.component';

@NgModule({
  declarations: [PlayListPageComponent],
  imports: [
    ShareModule
  ]
})
export class PlayListPageModule { }
