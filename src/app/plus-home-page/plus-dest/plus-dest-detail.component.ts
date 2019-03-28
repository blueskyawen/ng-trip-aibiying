import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlusPageService } from '../plus-page.service';

@Component({
  selector: 'app-plus-dest-detail',
  templateUrl: './plus-dest-detail.component.html',
  styleUrls: ['./plus-dest-detail.component.less']
})
export class PlusDestDetailComponent implements OnInit {
  destImg: string = 'https://z1.muscache.cn/4ea/air/v2/pictures/24389d88-396e-47c0-b6f1-b0581c448b39.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75';
  destnation: any = {};
  homeList: any[] = [];
  allHomeList: any[] = [];
  curIndex: number = 0;
  showLoading: boolean = false;
  constructor(private route: ActivatedRoute,
              private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let destId = params.get('id');
      this.showLoading = true;
      this.plusPageService.getDestById(destId).subscribe(res => {
        this.destnation = res;
      });
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
        let tnmpList = this.allHomeList;
        this.allHomeList = this.allHomeList.concat(tnmpList);
        this.setHomeList(this.allHomeList);
      });
    });
  }

  setHomeList(items: any[]) {
    if(items.length === 0) {
      this.showLoading = false;
      return;
    }
    for(let index = 0;index < 5;index++) {
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
      },3000);
    }
  }

}
