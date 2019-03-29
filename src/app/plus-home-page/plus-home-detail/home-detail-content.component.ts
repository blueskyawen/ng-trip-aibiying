import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-content',
  templateUrl: './home-detail-content.component.html',
  styleUrls: ['./home-detail-content.component.less']
})
export class HomeDetailContentComponent implements OnInit {
  @Input() homeData: any = {};
  constructor() { }

  ngOnInit() {
  }

  goMore() {
    window.open('https://www.airbnb.cn/plus', '_blank');
  }
}
