import { Component, OnInit, Input } from '@angular/core';
import { SelfCenterService } from '../self-center.service';

@Component({
  selector: 'app-hot-wish-list',
  templateUrl: './hot-wish-list.component.html',
  styleUrls: ['./hot-wish-list.component.less']
})
export class HotWishListComponent implements OnInit {
  allHotWishs: any[] = [];
  hotWishs: any[] = [];
  showLoading: boolean = false;
  showLoading2: boolean = false;
  showMore: boolean = true;
  constructor(private selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.showLoading = true;
    this.selfCenterService.getHotWishs().subscribe(res => {
      this.allHotWishs = res;
      this.hotWishs = this.allHotWishs.slice(0, 9);
      setTimeout(() => {this.showLoading = false;}, 1000);
    });
  }

  getMoreHotWishs() {
    this.showMore = false;
    this.showLoading2 = true;
    setTimeout(() => {
      this.hotWishs = this.allHotWishs;
      this.showLoading2 = false;
    }, 2000);
  }

}
