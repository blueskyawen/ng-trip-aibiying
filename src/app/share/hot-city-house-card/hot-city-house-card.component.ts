import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-city-house-card',
  templateUrl: './hot-city-house-card.component.html',
  styleUrls: ['./hot-city-house-card.component.less']
})
export class HotCityHouseCardComponent implements OnInit {
  @Input() house: any = {};
  roomDeescript: string = '';
  constructor() { }

  ngOnInit() {
    this.roomDeescript = this.house.room ? `${this.house.room}室${this.house.bedNum}床${this.house.toliet}卫` :
        `${this.house.bedNum}张床`;
  }
}
