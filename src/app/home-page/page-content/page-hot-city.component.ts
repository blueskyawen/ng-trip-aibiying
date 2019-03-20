import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageContentService } from './page-content.service';
import { Router } from '@angular/router';

class CityOption {
  id: string;
  title: string;
  name: string;
  active: boolean;
  constructor(id: string, title: string, name: string, active: boolean) {
    this.id = id;
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
export class PageHotCityComponent implements OnInit, AfterViewInit {
  cityList: CityOption[] = [];
  hostCityList: any[] = [];
  cityOper: string;
  curIndex = 0;
  selectedCity: CityOption;
  selectCityHouses: any[] = [];
  showLoading: boolean = false;
  constructor(private pageContentService: PageContentService, private router: Router) {
  }

  ngOnInit() {
    this.showLoading = true;
    this.pageContentService.getHostCityList().subscribe((res: any) => {
      this.hostCityList = res;
      this.setCityList();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showLoading = false;
    },100);
  }

  setCityList() {
    this.hostCityList.forEach((city) => {
      this.cityList.push(new CityOption(city.id, city.name_zh, city.name_en, false));
    });
    this.cityList[0].active = true;
    this.selectCityHouses = this.hostCityList[0].houseList;
    this.selectedCity = this.cityList[this.curIndex];
  }

  selectCity(item: any) {
    this.selectedCity = item;
    this.cityList.forEach((city) => {city.active = false; });
    item.active = true;
    const itemIndex = this.cityList.indexOf(item);
    this.cityOper = '';
    if (itemIndex > this.curIndex) {
      setTimeout(() => {
        this.cityOper = 'prev';
      }, 100);
    }
    if (itemIndex < this.curIndex) {
      setTimeout(() => {
        this.cityOper = 'next';
      }, 100);
    }
    this.curIndex = itemIndex;
    this.setSelectCityHouses();
  }

  setSelectCityHouses() {
    this.selectCityHouses = this.hostCityList[this.curIndex].houseList;
  }

  goMoreHouses() {
    this.router.navigate(['/exhibit/houselist', 'Nanjing']);
  }
}
