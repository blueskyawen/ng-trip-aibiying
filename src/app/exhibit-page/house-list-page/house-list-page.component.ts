import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExhibitPageService } from '../exhibit-page.service';
import { PageRegisterLoginService } from '../../home-page/page-register-login/page-register-login.service';
import { HomePageService } from '../../home-page/home-page.service';

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
  isShowLogin: boolean = false;
  isShowRegister: boolean = false;
  isShowRelateWish: boolean = false;
  pickHouse: any = {imgs:[]};
  myWishs: any[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
              private exhibitPageService: ExhibitPageService,
              public pageRegisterLoginService: PageRegisterLoginService,
              private homePageService: HomePageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityName = params.get('city');
      this.showLoading = true;
      if(this.cityName === 'all') {
        this.getAllHouses();
      } else {
        this.getCityHouses();
      }
    });
    this.getMyWishs();
  }

  getMyWishs() {
    this.homePageService.getWishList().subscribe(res => {
      this.myWishs = res.wishList;
      this.myWishs.forEach(item => {item.selected = false;});
    });
  }

  getCityHouses() {
    this.exhibitPageService.getPlatList(this.cityName).subscribe(res => {
      console.log(res);
      if(this.cityName !== 'London') {
        let tempCitys = [];
        res.forEach(item => {
          tempCitys = tempCitys.concat(item.list);
        });
        const inhibitCity = tempCitys.find(city => {
          return city.city_en === this.cityName;
        });
        this.cityHouselist = inhibitCity.houses;
      } else {
        this.cityHouselist = res;
      }
      this.InitPlayData();
      this.showLoading = false;
    });
  }

  getAllHouses() {
    this.exhibitPageService.getAllHouseList().subscribe(res => {
      console.log(res);
      this.cityHouselist = res;
      this.InitPlayData();
      this.showLoading = false;
    });
  }

  private InitPlayData() {
    this.setCityHouseList(this.cityHouselist);
    this.cityHouselist1 = this.cityHouselist.slice(0, 12);
    this.cityHouselist2 = this.cityHouselist.slice(12, 16);
  }

  setCityHouseList(houses: any[]) {
    houses.forEach(house => {
      house.imgOption = [];
      house.imgs.forEach(image => {
        house.imgOption.push({
          url: image,
          disable: false,
          callback: () => {this.router.navigate(['/house', house.id]); }
        });
      });
    });
  }

  handleIndexChange() {

  }

  pickTheHouse(house: any) {
    this.pickHouse = house;
    if(this.pageRegisterLoginService.isLogined) {
      this.isShowRelateWish = true;
    } else {
      this.isShowLogin = true;
    }
  }

  handleToLoginEvnent() {
    this.isShowLogin = true;
  }

  handleToRegisterEvnent() {
    this.isShowRegister = true;
  }

  loginSuccess() {
    setTimeout(() => {
      this.pickTheHouse(this.pickHouse);
    },500);
  }

}
