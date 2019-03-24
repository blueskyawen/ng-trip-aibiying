import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/core.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExhibitPageService } from '../exhibit-page.service';

@Component({
  selector: 'app-house-detail-page',
  templateUrl: './house-detail-page.component.html',
  styleUrls: ['./house-detail-page.component.less']
})
export class HouseDetailPageComponent implements OnInit {
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
  constructor(private coreService: CoreService,
              private exhibitPageService: ExhibitPageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.houseId = this.coreService.getHouseIndex(params.get('id'));
      this.showLoading = true;
      this.exhibitPageService.getHouseData(this.houseId).subscribe(res => {
        this.houseData = res;
        console.log(this.houseData);
        this.initHouseData();
        console.log(this.houseData);
        this.showLoading = false;
      });
    });
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
}
