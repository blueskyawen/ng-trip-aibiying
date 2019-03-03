import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibModule } from 'ng-shadow-cat-d';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, LibModule
  ],
  exports: [LibModule]
})
export class ShareModule { }
