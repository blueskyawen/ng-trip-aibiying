import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-carousel',
  templateUrl: './page-carousel.component.html',
  styleUrls: ['./home-page.less']
})
export class PageCarouselComponent implements OnInit {
  slideOptions: any[] = [
    {url: 'https://z1.muscache.cn/pictures/55a5bf2f-99fc-4a62-96de-8e3235353466.jpg',
      disable: false,
      callback: () => {this.goExhibition(); }},
    {url: 'https://z1.muscache.cn/pictures/b42cd76b-edec-4f88-8dfe-3f20933c7a60.jpg',
      disable: false,
      callback: () => {this.goExhibition(); }},
    {url: 'https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg',
      disable: false,
      callback: () => {this.goExhibition(); }}
  ];
  slideOptionTitle: any = {
    head: '48 小时踏青玩个够',
    subHead: '领取礼券 扑向春天',
    description: '挑个周末逃离恒温都市，让初春叫醒你'
  };
  slideProcess: any[] = [
    {curValue: 0, total: 100, isdynamic: true},
    {curValue: 0, total: 100, isdynamic: false},
    {curValue: 0, total: 100, isdynamic: false}
  ];
  curSlideIndex = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  clearCurrentSlide() {
    this.slideProcess[this.curSlideIndex].isdynamic = false;
  }

  handleSlideChange(index: number) {
    this.clearCurrentSlide();
    this.curSlideIndex = index;
    if (index === 0) {
      this.slideOptionTitle = {
        head: '48 小时踏青玩个够',
        subHead: '领取礼券 扑向春天',
        description: '挑个周末逃离恒温都市，让初春叫醒你'
      };
    }
    if (index === 1) {
      this.slideOptionTitle = {
        head: '在花香与暖阳里',
        subHead: '发现国内赏花目的地',
        description: '趁着好天气，与明媚的春日来张同框合影'
      };
    }
    if (index === 2) {
      this.slideOptionTitle = {
        head: '五月北海道',
        subHead: '自由自在 悠然赏樱',
        description: '抓住樱花季的尾巴，特色民宿等你选'
      };
    }
    this.slideProcess[this.curSlideIndex].isdynamic = true;
  }

  goExhibition() {
    if(this.curSlideIndex === 0) {
      return;
    }
    let index = this.curSlideIndex === 1 ? '11' : '22';
    this.router.navigate(['/exhibit/playlist', index]);
  }
}
