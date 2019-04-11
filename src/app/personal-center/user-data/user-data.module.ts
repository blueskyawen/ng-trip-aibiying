import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';

@NgModule({
  declarations: [UserDataComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, UserDataRoutingModule
  ]
})
export class UserDataModule { }
