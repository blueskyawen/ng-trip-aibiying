import { Component, OnInit, Input } from '@angular/core';
import { PageContentService } from '../home-page/page-content/page-content.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.less']
})
export class StoryListComponent implements OnInit {
  @Input() type: string;
  storyList: any[] = [];
  storyType: any = {
    'house resource': '房源',
    'scenic spot': '景点',
    'cate': '美食',
    'custom culture': '文化',
    'activity': '活动',
    'shop': '店铺'
  };
  showLoading: boolean = false;
  curIndex: number = 0;
  resList: any[] = [];
  constructor(private pageContentService: PageContentService) { }

  ngOnInit() {
    this.pageContentService.getTripStoryList().subscribe(res => {
      this.resList = this.type ? res.filter(item => {return item.type === this.type;}) : res;
      this.showLoading = true;
      this.setStoryList(this.resList);
    });
  }

  setStoryList(items: any[]) {
    for(let index = 0;index < 8;index++) {
      this.curIndex++;
      if(this.curIndex >= items.length) {
        break;
      }
      this.storyList.push(items[this.curIndex]);
    }
    if(this.curIndex >= items.length) {
      this.showLoading = false;
    } else {
      setTimeout(() => {
        this.setStoryList(items);
      },2000);
    }
  }

}
