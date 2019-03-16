import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-story-card',
  templateUrl: './trip-story-card.component.html',
  styleUrls: ['./trip-story-card.component.less']
})
export class TripStoryCardComponent implements OnInit {
  @Input() story: any = {};
  storyType: any = {
    'house resource': '房源',
    'scenic spot': '景点',
    'cate': '美食',
    'custom culture': '文化',
    'activity': '活动',
    'shop': '店铺'
  };
  constructor() { }

  ngOnInit() {
  }

}
