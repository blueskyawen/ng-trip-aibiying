import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-apps',
  templateUrl: './user-apps.component.html',
  styleUrls: ['./user-apps.component.less']
})
export class UserAppsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goAddZhanghao() {
    window.open('https://www.airbnb.cn/host-assist', '_blank');
  }
}
