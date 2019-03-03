import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HeadLoginOutComponent } from './head-login-out.component';

@NgModule({
  declarations: [HeadLoginOutComponent],
  imports: [
    CommonModule, ShareModule
  ],
  exports: [HeadLoginOutComponent]
})
export class PageHeadModule { }
