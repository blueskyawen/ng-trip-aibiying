import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-landord',
  templateUrl: './home-detail-landord.component.html',
  styleUrls: ['./home-detail-landord.component.less']
})
export class HomeDetailLandordComponent implements OnInit {
  @Input() homeData: any = {};
  isShowLogin: boolean = false;
  isShowRegister: boolean = false;
  constructor() { }

  ngOnInit() {
    let regDate = new Date(this.homeData.owner.registerTime);
    this.homeData.owner.timeShow = `${regDate.getFullYear()}年${regDate.getMonth()}月`;
  }

  handleToLoginEvnent() {
    this.isShowLogin = true;
  }

  handleToRegisterEvnent() {
    this.isShowRegister = true;
  }
}

