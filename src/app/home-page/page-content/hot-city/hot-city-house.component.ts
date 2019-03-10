import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-city-house',
  templateUrl: './hot-city-house.component.html',
  styleUrls: ['./hot-city-house.component.less']
})
export class HotCityHouseComponent implements OnInit {
  @Input() houseList: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  goDetail(item: any) {
    window.open('https://www.airbnb.cn/rooms/18402119?guests=1&adults=1', '_blank');
  }
}
