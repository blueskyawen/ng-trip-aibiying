import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibit-invite',
  templateUrl: './exhibit-invite.component.html',
  styleUrls: ['./exhibit-invite.component.less']
})
export class ExhibitInviteComponent implements OnInit {
  isShowRegister: boolean = false;
  isShowLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleToLogin() {
    this.isShowLogin = true;
  }

  handleToRegister() {
    this.isShowRegister = true;
  }

  gotoInviteDetail() {
    window.open('https://www.airbnb.cn/help/article/2269', '_blank');
  }
}
