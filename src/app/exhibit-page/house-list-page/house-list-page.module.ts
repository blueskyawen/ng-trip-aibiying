import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';

import { HouseListPageComponent } from './house-list-page.component';
import { HouseListInviteComponent } from './house-list-invite.component';

@NgModule({
  declarations: [HouseListPageComponent, HouseListInviteComponent],
  imports: [
    ShareModule
  ]
})
export class HouseListPageModule { }
