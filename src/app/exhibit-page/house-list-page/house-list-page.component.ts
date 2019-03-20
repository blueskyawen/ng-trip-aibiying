import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExhibitPageService } from '../exhibit-page.service';

@Component({
  selector: 'app-house-list-page',
  templateUrl: './house-list-page.component.html',
  styleUrls: ['./house-list-page.component.less']
})
export class HouseListPageComponent implements OnInit {
  cityName: string;
  inviteImg: string = 'https://z1.muscache.cn/4ea/air/v2/pictures/2ddf6ea2-5f3d-43d2-89ad-de8a23a84412.jpg?t=r:w750-h500-sfit,e:fjpg-c80';
  showLoading: boolean = false;
  cityHouselist: any[] = [];
  cityHouselist1: any[] = [];
  cityHouselist2: any[] = [];
  curPageIndex: number = 1;
  constructor(private route: ActivatedRoute,
              private exhibitPageService: ExhibitPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityName = params.get('city');
      this.showLoading = true;
      this.exhibitPageService.getPlatList().subscribe(res => {
        let tempCitys = [];
        res.forEach(item => {
          tempCitys = tempCitys.concat(item.list);
        });
        const inhibitCity = tempCitys.find(city => {
          return city.city_en === this.cityName;
        });
        this.cityHouselist = inhibitCity.houses;
        this.InitPlayData();
        this.showLoading = false;
      });
    });
  }

  private InitPlayData() {
    this.cityHouselist1 = this.cityHouselist.slice(0, 12);
    this.cityHouselist2 = this.cityHouselist.slice(12, 16);
    this.setCityHouseList(this.cityHouselist1);
    this.setCityHouseList(this.cityHouselist2);
  }

  setCityHouseList(houses: any[]) {
    houses.forEach(house => {
      house.imgOption = [];
      house.imgs.forEach(image => {
        house.imgOption.push({
          url: image,
          disable: false,
          callback: () => {}
        });
      });
    });
  }

  handleIndexChange() {

  }

}
