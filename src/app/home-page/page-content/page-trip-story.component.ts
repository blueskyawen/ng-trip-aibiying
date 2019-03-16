import { Component, OnInit } from '@angular/core';
import { PageContentService } from './page-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-trip-story',
  templateUrl: './page-trip-story.component.html',
  styleUrls: ['./page-trip-story.component.less']
})
export class PageTripStoryComponent implements OnInit {
  storyList: any[] = [];
  storyType: any = {
    'house resource': '房源',
    'scenic spot': '景点',
    'cate': '美食',
    'custom culture': '文化',
    'activity': '活动',
    'shop': '店铺'
  };
  constructor(private pageContentService: PageContentService, private router: Router) { }

  ngOnInit() {
    this.pageContentService.getTripStoryList().subscribe(res => {
      this.storyList = res.slice(0,8);
    });
  }

  goMoreStory() {
    this.router.navigate(['/story/home']);
  }
}
