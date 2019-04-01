import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-city-house-card',
  templateUrl: './hot-city-house-card.component.html',
  styleUrls: ['./hot-city-house-card.component.less']
})
export class HotCityHouseCardComponent implements OnInit {
  @Input() house: any = {};
  @Input() excelLandord: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
