import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LibModule } from 'ng-shadow-cat-d';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, LibModule
  ],
  exports: [LibModule, CommonModule, HttpClientModule]
})
export class ShareModule { }
