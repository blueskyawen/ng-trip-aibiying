import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ClassicCityPageService } from './classic-city-page.service';

@Component({
  selector: 'app-city-home',
  templateUrl: './city-home.component.html',
  styleUrls: ['./city-home.component.less']
})
export class CityHomeComponent implements OnInit {
  cityName: string = '';
  cityId: string = '';
  cityData: any = {};
  showLoading: boolean;
  experList: any[] = [];
  highPressExper: any = {
    categroy: 'highPress',
    name: '高分体验',
    text: '在下趟旅程中，不妨预订由本地达人组织的体验活动',
    list: []
  };
  constructor(private route: ActivatedRoute,
              private cityPageService: ClassicCityPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityId = params.get('id');
      this.cityName = params.get('name');
      this.showLoading = true;
      this.cityPageService.getExperType(this.cityName).subscribe(res => {
        this.experList = res.types;
        this.setExperList();
        this.cityPageService.getCityById(this.cityId).subscribe(res2 => {
          this.cityData = res2;
          this.initCityData();
          this.showLoading = false;
        });
      });
    });
  }

  setExperList() {
    this.experList.forEach(item => {
      item['list'] = [];
    });
  }

  initCityData() {
    this.cityData.experiences.forEach(exper => {
      if (exper.highPress) {
        this.highPressExper.list.push(exper);
      }
      let tmpExper = this.experList.find(item => {return item.categroy === exper.categroy; });
      if(tmpExper) {
        tmpExper.list.push(exper);
      }
    });
    this.highPressExper.list = this.highPressExper.list.slice(0, 6);
    this.experList.forEach(item2 => {
      item2.list = item2.list.slice(0, 8);
    });
  }

}
