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

  }

}
