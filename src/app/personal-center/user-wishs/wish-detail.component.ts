import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SelfCenterService } from '../self-center.service';
import { HomePageService } from '../../home-page/home-page.service';
import {
  ControlAnchor, MapOptions, MapTypeControlOptions, MapTypeControlType,
  NavigationControlOptions, NavigationControlType, MarkerOptions,
  MapTypeEnum
} from 'angular2-baidu-map'

@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrls: ['./wish-detail.component.less']
})
export class WishDetailComponent implements OnInit {
  showLoading: boolean = false;
  wish: any = {
    'id': '',
    'name': '',
    'photo': '',
    'privacy': 'public',
    'person': {'adult': 2, 'child': 0, 'baby': 0},
    'projects': []
  };
  wishData: any = {};
  wishId: number;
  type: string;
  isShowDel: boolean = false;
  showMsg: boolean = false;
  unpickHouse: any = {};
  isShowUnpick: boolean = false;
  options: MapOptions;
  mapInstance: any;
  public controlOpts: NavigationControlOptions;
  public mapTypeOpts: MapTypeControlOptions;

  constructor(private selfCenterService: SelfCenterService,
              public homePageService: HomePageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.wishId = +params.get('id');
      this.type = params.get('type');
      this.showLoading = true;
      if(this.type === 'hot') {
        this.selfCenterService.getHotWishById(this.wishId).subscribe(res => {
          this.wish = res;
          this.procProjectList();
          setTimeout(() => {this.showLoading = false;}, 1000);
        });
      } else {
        this.homePageService.getOneWish(this.wishId.toString()).subscribe(res => {
          if(res.wish) {
            this.wishData = res.wish;
            this.wish.id = res.wish.id;
            this.wish.name = res.wish.data.name;
            this.wish.privacy = res.wish.data.privacy;
            this.wish.person = res.wish.data.person;
            this.wish.projects = res.wish.data.projects;
          }
          this.procProjectList();
          setTimeout(() => {this.showLoading = false;}, 1000);
        });
      }
    });
    this.initMap();
  }

  procProjectList() {
    this.wish.projects.forEach(project => {
      project.imgOption = [];
      project.imgs.forEach(image => {
        project.imgOption.push({
          url: image,
          disable: false,
          callback: () => {this.router.navigate(['/house', project.id]); }
        });
      });
    });
  }

  deleteWish() {
    this.isShowDel = true;
  }

  deleteConfirm() {
    this.homePageService.delOneWish(this.wishId.toString()).subscribe(res => {
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
        this.isShowDel = false;
        this.router.navigate(['/selfCenter/wishs']);
      }, 2000);
    });
  }

  cancel() {
    this.isShowDel = false;
  }

  pickTheHouse(isPicked:boolean,house: any) {
    if(isPicked) {
      this.unpickHouse = house;
      this.isShowUnpick = true;
    }
  }

  unpickConfirm() {
    this.homePageService.removeWishProject([this.wishData],this.unpickHouse).subscribe(res => {
      if(res) {
        this.wishData.data.projects = this.wishData.data.projects.filter(pro => {
          return pro.id != this.unpickHouse.id;
        });
        this.wish.projects = this.wish.projects.filter(pro => {
          return pro.id != this.unpickHouse.id;
        });
        this.undateLocalWishs();
      }
      this.isShowUnpick = false;
    });
  }

  unpickCancel() {
    this.isShowUnpick = false;
  }

  undateLocalWishs() {
    this.homePageService.getWishList().subscribe(res => {
      this.homePageService.wishList = res.wishList.slice(0, 3);
    });
  }

  initMap() {
    this.options = {
      centerAndZoom: {
        lat: 31.2422050000,
        lng: 121.5060110000,
        zoom: 13
      },
      enableKeyboard: true
    };
    this.addNavigationControl();
    this.addMapTypes();
  }

  mapLoaded(emap: any) {
    this.mapInstance = emap;
  }

  addNavigationControl() {
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL,
      enableGeolocation: true
    };
  }

  addMapTypes() {
    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP,
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_SATELLITE_MAP]
    }
  }

}
