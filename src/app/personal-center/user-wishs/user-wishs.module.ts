import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { UserWishsRoutingModule } from './user-wishs-routing.module';

import { UserWishsComponent } from './user-wishs.component';
import { AddWishComponent } from './add-wish.component';
import { HotWishListComponent } from './hot-wish-list.component';
import { WishListComponent } from './wish-list.component';

@NgModule({
  declarations: [UserWishsComponent, AddWishComponent, HotWishListComponent, WishListComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule,
    UserWishsRoutingModule
  ]
})
export class UserWishsModule { }
