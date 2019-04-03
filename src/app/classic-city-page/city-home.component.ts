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
  experList: any = [
    {
      type: 'highPress',
      name: '高分体验',
      title: '在下趟旅程中，不妨预订由本地达人组织的体验活动',
      list: []
    }
  ];
  highPressExper: any = {};
  constructor(private route: ActivatedRoute,
              private cityPageService: ClassicCityPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityId = params.get('id');
      this.cityName = params.get('name');
      this.showLoading = true;
      this.cityPageService.getCityById(this.cityId).subscribe(res => {
        this.cityData = res;
        this.initCityData();
        this.showLoading = false;
      });
    });
  }

  initCityData() {
    this.cityData.experiences.forEach(exper => {
      if(exper.highPress) {
        this.experList[0].list.push(exper);
      }
    });
    this.experList.forEach(item => {
      if(item.type === 'highPress') {
        item.list = item.list.slice(0, 5);
      } else {
        item.list = item.list.slice(0, 8);
      }
    });
  }

}
