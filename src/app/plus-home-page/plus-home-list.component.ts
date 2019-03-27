import { Component, OnInit } from '@angular/core';
import { PlusPageService } from './plus-page.service';

@Component({
  selector: 'app-plus-home-list',
  templateUrl: './plus-home-list.component.html',
  styleUrls: ['./plus-home-list.component.less']
})
export class PlusHomeListComponent implements OnInit {
  homeList: any[] = [];
  showLoading: boolean = false;
  allHomeList: any[] = [];
  curIndex: number = 0;
  constructor(private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.plusPageService.getPlusHouseList().subscribe(res => {
      this.allHomeList = res;
      this.allHomeList.forEach(house => {
        house.imgOption = [];
        house.imgs.forEach(image => {
          house.imgOption.push({
            url: image,
            disable: false,
            callback: () => {}
          });
        });
      });
      this.showLoading = true;
      this.setHomeList(this.allHomeList);
    });
  }

  setHomeList(items: any[]) {
    if(items.length === 0) {
      this.showLoading = false;
      return;
    }
    for(let index = 0;index < 8;index++) {
      this.homeList.push(items[this.curIndex]);
      this.curIndex++;
      if(this.curIndex >= items.length) {
        break;
      }
    }
    if(this.curIndex >= items.length) {
      this.showLoading = false;
    } else {
      setTimeout(() => {
        this.setHomeList(items);
      },2000);
    }
  }
}
