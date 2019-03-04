import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-carousel',
  templateUrl: './page-carousel.component.html',
  styleUrls: ['./home-page.less']
})
export class PageCarouselComponent implements OnInit {
  slideOptions: any[] = [
    {url: 'https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg',
      disable: false,
      callback: () => {console.log('callback1');}},
    {url: 'https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg',
      disable: false,
      callback: () => {console.log('callback2');}},
    {url: 'https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg',
      disable: false,
      callback: () => {console.log('callback3');}}
  ];
  slideOptionTitle: any = {
    head: '领取赏樱礼金券',
    subHead: '趁花开 邂逅日本',
    description: '领取缤纷赏樱礼金券'
  };
  slideProcess: any[] = [
    {curValue: 0, total: 100, isdynamic: true},
    {curValue: 0, total: 100, isdynamic: false},
    {curValue: 0, total: 100, isdynamic: false}
  ];
  curSlideIndex = 0;
  constructor() { }

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
        head: '领取赏樱礼金券',
        subHead: '趁花开 邂逅日本',
        description: '领取缤纷赏樱礼金券'
      };
    }
    if (index === 1) {
      this.slideOptionTitle = {
        head: '来九州看樱花',
        subHead: '在大自然间畅快呼吸',
        description: '避开人潮看花泡温泉，利用小长假去日本吧'
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
}
