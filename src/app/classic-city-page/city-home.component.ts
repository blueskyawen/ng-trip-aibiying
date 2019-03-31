import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-city-home',
  templateUrl: './city-home.component.html',
  styleUrls: ['./city-home.component.less']
})
export class CityHomeComponent implements OnInit {
  cityName: string = '';
  cityId: string = '';
  showLoading: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityId = params.get('id');
      this.cityName = params.get('name');
      this.showLoading = true;
    });
  }

}
