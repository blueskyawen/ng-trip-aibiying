import { Component, OnInit, Input } from '@angular/core';

class ViewImage {
  label: string;
  image: string;
  constructor(label: string, image: string) {
    this.label = label;
    this.image = image;
  }
}

@Component({
  selector: 'app-home-detail-content',
  templateUrl: './home-detail-content.component.html',
  styleUrls: ['./home-detail-content.component.less']
})
export class HomeDetailContentComponent implements OnInit {
  @Input() homeData: any = {};
  featPhotoNum: number = 0;
  homeViewImages: ViewImage[] = [];
  isShowPhotos: boolean = false;
  isShowFatify: boolean = false;
  constructor() { }

  ngOnInit() {
    this.homeData.featImages.forEach(item => {
      this.featPhotoNum += item.images.length;
      this.homeViewImages.push(new ViewImage(item.label, item.images[0]));
    });
  }

  goMore() {
    window.open('https://www.airbnb.cn/plus', '_blank');
  }
}
