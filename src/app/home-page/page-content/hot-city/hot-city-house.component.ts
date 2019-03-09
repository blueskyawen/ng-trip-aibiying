import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-city-house',
  templateUrl: './hot-city-house.component.html',
  styleUrls: ['./hot-city-house.component.less']
})
export class HotCityHouseComponent implements OnInit {
  houseList: any[] = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

}
