import { Component, OnInit } from '@angular/core';

class CityOption {
  title: string;
  name: string;
  active: boolean;
  constructor(title: string, name: string, active: boolean) {
    this.title = title;
    this.name = name;
    this.active = active;
  }
}

@Component({
  selector: 'app-page-hot-city',
  templateUrl: './page-hot-city.component.html',
  styleUrls: ['./page-hot-city.component.less']
})
export class PageHotCityComponent implements OnInit {
  cityList : CityOption[] = [new CityOption('北京','Beijing',false),new CityOption('重庆','Chongqing',false),
    new CityOption('成都','Chengdu',true),new CityOption('大理','Dali',false),
    new CityOption('东京','Tokyo',false),new CityOption('伦敦','London',false),
    new CityOption('洛杉矶','Los Angeles',false),new CityOption('巴黎','Paris',false)];
  cityOper : string;
  curIndex = 2;
  selectedCity: CityOption;
  constructor() {
    this.selectedCity = this.cityList[this.curIndex];
  }

  ngOnInit() {
  }

  selectCity(item : any) {
    this.selectedCity = item;
    this.cityList.forEach((city) => {city.active = false;});
    item.active = true;
    let itemIndex = this.cityList.indexOf(item);
    this.cityOper = '';
    if(itemIndex > this.curIndex) {
      setTimeout(() => {
        this.cityOper = 'prev';
      },100);
    }
    if(itemIndex < this.curIndex) {
      setTimeout(() => {
        this.cityOper = 'next';
      },100);
    }
    this.curIndex = itemIndex;
  }
}
