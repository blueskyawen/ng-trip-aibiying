import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { CoreService } from '../../core/core.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExhibitPageService } from '../exhibit-page.service';
import { PageContentService } from '../../home-page/page-content/page-content.service';

@Component({
  selector: 'app-house-detail-page',
  templateUrl: './house-detail-page.component.html',
  styleUrls: ['./house-detail-page.component.less']
})
export class HouseDetailPageComponent implements OnInit, AfterViewInit {
  houseId: number;
  showLoading: boolean = false;
  houseData: any;
  photoSrc: any = {};
  photos: string[] = [];
  isShowPhotoView: boolean = false;
  curImgIndex: number = 0;
  houseHeads: any[] = [
    {name: '详情', label: '#detail', isActive: true}, {name: '评价', label: '#comment', isActive: false},
    {name: '位置', label: '#location', isActive: false}, {name: '须知', label: '#notice', isActive: false},
    {name: '房东', label: '#landlord', isActive: false}
  ];
  cityOtherHouses: any[] = [];
  isShowLogin: boolean = false;
  isShowRegister: boolean = false;

  isHeadFixed: boolean = false;
  isOrderFixed: boolean = false;
  isOrderBottom: boolean = false;
  @ViewChild('HouseContent')
      HouseContentRef: ElementRef;
  @ViewChild('OtherHouse')
      OtherHouseRef: ElementRef;
  constructor(private coreService: CoreService,
              private exhibitPageService: ExhibitPageService,
              private route: ActivatedRoute,
              private pageContentService: PageContentService,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.houseId = this.coreService.getHouseIndex(params.get('id'));
      this.showLoading = true;
      this.exhibitPageService.getHouseData(this.houseId).subscribe(res => {
        this.houseData = res;
        this.initHouseData();
        this.pageContentService.getHostCityList().subscribe(res2 => {
          let cityHomes = res2.find(item => {return item.name_en === this.houseData.city_en;});
          if(cityHomes) {
            this.cityOtherHouses = cityHomes.houseList.slice(0, 3);
          }
        });
        this.showLoading = false;
      });
    });
  }

  ngAfterViewInit() {
    this.renderer.listen('document', 'scroll',
        () => {this.checkDetailHead();});
  }

  checkDetailHead() {
    if(!this.isHeadFixed) {
      if(this.HouseContentRef.nativeElement.getBoundingClientRect().top < 50) {
        this.isHeadFixed = true;
      }
    } else {
      if(this.HouseContentRef.nativeElement.getBoundingClientRect().top > 50) {
        this.isHeadFixed = false;
      }
    }
    if(!this.isOrderFixed) {
      if(this.isOrderBottom) {
        if(this.OtherHouseRef.nativeElement.getBoundingClientRect().top > 560) {
          this.isOrderBottom = false;
          this.isOrderFixed = true;
        }
      } else {
        if(this.HouseContentRef.nativeElement.getBoundingClientRect().top < 50) {
          this.isOrderFixed = true;
        }
      }
    } else {
      if(this.HouseContentRef.nativeElement.getBoundingClientRect().top > 50) {
        this.isOrderFixed = false;
        this.isOrderBottom = false;
      }
      if(this.OtherHouseRef.nativeElement.getBoundingClientRect().top < 560) {
        this.isOrderFixed = false;
        this.isOrderBottom = true;
      }
    }
  }

  initHouseData() {
    this.houseData.photoOptions = [];
    let tmpId = 0;
    this.houseData.photos.forEach(photo => {
      this.houseData.photoOptions.push({
        id: tmpId++,
        title: this.houseData.title,
        alt: this.houseData.title.slice(0, 10),
        src: photo
      });
    });
    this.photoSrc = this.houseData.photoOptions[0];
    this.photos = this.houseData.photoOptions.slice(1, 5);
  }

  openPhotoView(index: number) {
    this.curImgIndex = index;
    this.isShowPhotoView = true;
  }

  goJiaoyi() {
    window.open('https://www.airbnb.cn/help/article/199', '_blank');
  }

  getRegistime(time : string) {
    let regDate = new Date(time);
    return `${regDate.getFullYear()}年${regDate.getMonth()}月`;
  }

  handleToLoginEvnent() {
    this.isShowLogin = true;
  }

  handleToRegisterEvnent() {
    this.isShowRegister = true;
  }

  informChange() {
    this.isShowLogin = true;
  }
}
