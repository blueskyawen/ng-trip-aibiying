import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { ExhibitPageRoutingModule } from './exhibit-page-routing.module';
import { ExhibitPageComponent } from './exhibit-page.component';

@NgModule({
  declarations: [ExhibitPageComponent],
  imports: [
    ShareModule,
    ExhibitPageRoutingModule
  ]
})
export class ExhibitPageModule { }
