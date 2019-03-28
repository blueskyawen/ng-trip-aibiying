import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlusPageService } from '../plus-page.service';

@Component({
  selector: 'app-plus-inpire-detail',
  templateUrl: './plus-inpire-detail.component.html',
  styleUrls: ['./plus-inpire-detail.component.less']
})
export class PlusInpireDetailComponent implements OnInit {
  inpire: any = {};
  homeList: any[] = [];
  allHomeList: any[] = [];
  curIndex: number = 0;
  showLoading: boolean = false;
  constructor(private route: ActivatedRoute,
              private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let inpireId = params.get('id');
      this.showLoading = true;
      this.plusPageService.geInpireById(inpireId).subscribe(res => {
        this.inpire = res;
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
        this.setHomeList(this.allHomeList);
      });
    });
  }

  setHomeList(items: any[]) {
    if(items.length === 0) {
      this.showLoading = false;
      return;
    }
    for(let index = 0;index < 4;index++) {
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
