import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-photo',
  templateUrl: './home-detail-photo.component.html',
  styleUrls: ['./home-detail-photo.component.less']
})
export class HomeDetailPhotoComponent implements OnInit {
  @Input() homeData: any = {};
  isShowPhotoView: boolean = false;
  isShowLogin: boolean = false;
  isShowRegister: boolean = false;
  curImgIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  openPhotoView() {
    this.isShowPhotoView = true;
  }

  handleToLoginEvnent() {
    this.isShowLogin = true;
  }

  handleToRegisterEvnent() {
    this.isShowRegister = true;
  }

}
