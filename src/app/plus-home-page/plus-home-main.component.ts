import { Component, OnInit } from '@angular/core';
import { PlusPageService } from './plus-page.service';

@Component({
  selector: 'app-plus-home-main',
  templateUrl: './plus-home-main.component.html',
  styleUrls: ['./plus-home-main.component.less']
})
export class PlusHomeMainComponent implements OnInit {
  showLoading: boolean = false;
  plusImg: string = 'https://z1.muscache.cn/4ea/air/v2/pictures/fb7d63bb-9220-467e-8265-132438393ee3.jpg?t=c:w3393-h1029,r:w3393-h1029-sfit,e:fjpg-c75';

  constructor(public plusPageService: PlusPageService) { }

  ngOnInit() {
  }

}
