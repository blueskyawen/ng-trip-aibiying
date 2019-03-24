import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-detail-info',
  templateUrl: './house-detail-info.component.html',
  styleUrls: ['./house-detail-info.component.less']
})
export class HouseDetailInfoComponent implements OnInit {
  @Input() houseData: any;
  starInfo: string;
  isShowAbout: boolean = false;
  fatifys: any[] = [];
  allFatifys: any[] = [];
  isShowFatify: boolean = false;
  constructor() { }

  ngOnInit() {
    this.starInfo = `${this.houseData.good_press}分 · ${this.houseData.comment.num}条评论`;
    for(var key in this.houseData.otherfality) {
      this.allFatifys = this.allFatifys.concat(this.houseData.otherfality[key]);
    }
    this.fatifys = this.allFatifys.slice(0, 5);
  }

}
