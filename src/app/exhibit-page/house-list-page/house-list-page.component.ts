import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-house-list-page',
  templateUrl: './house-list-page.component.html',
  styleUrls: ['./house-list-page.component.less']
})
export class HouseListPageComponent implements OnInit {
  cityName: string;
  inviteImg: string = 'https://z1.muscache.cn/4ea/air/v2/pictures/2ddf6ea2-5f3d-43d2-89ad-de8a23a84412.jpg?t=r:w750-h500-sfit,e:fjpg-c80';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityName = params.get('city');
    });
  }

}
