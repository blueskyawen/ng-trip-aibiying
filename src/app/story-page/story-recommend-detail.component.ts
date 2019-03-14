import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StoryPageService } from './story-page.service';

@Component({
  selector: 'app-story-recommend-detail',
  templateUrl: './story-recommend-detail.component.html',
  styleUrls: ['./story-recommend-detail.component.less']
})
export class StoryRecommendDetailComponent implements OnInit {
  cityStory: any = {};
  recommendName: string = '';
  categorys: any[] = [
    {
      name:'房源',
      title:'house resource',
      num: 0,
      imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/adcabe0e-0d87-47e4-a729-b23b8c83b6bb.jpg?t=r:w512-h288-sfit,e:fjpg-c80'
    },
    {
      name:'美食',
      title:'cate',
      num: 0,
      imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/6beceab2-4296-4f05-a950-73279a21cfa0.jpg?t=r:w512-h288-sfit,e:fjpg-c80'
    },
    {
      name:'景点',
      title:'scenic spot',
      num: 0,
      imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/a6104dcc-83cb-4c5f-9a08-b6a30e88bab2.jpg?t=r:w512-h288-sfit,e:fjpg-c80'
    },
    {
      name:'店铺',
      title:'shop',
      num: 0,
      imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/eefda30f-303c-488b-a21d-c78dfad79010.jpg?t=r:w512-h288-sfit,e:fjpg-c80'
    },
    {
      name:'文化',
      title:'custom culture',
      num: 0,
      imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/475841c5-4697-41b8-8362-5528b7a3fefb.jpg?t=r:w512-h288-sfit,e:fjpg-c80'
    },
    {
      name:'活动',
      title:'activity',
      num: 0,
      imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/bcf834cc-271a-486f-865c-00926353873b.jpg?t=r:w512-h288-sfit,e:fjpg-c80'
    }
  ];
  showLoading: boolean = false;
  constructor(private route: ActivatedRoute, private storyPageService: StoryPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recommendName = params.get('name');
      this.showLoading = true;
      this.storyPageService.getCityStoryList().subscribe(res => {
        this.cityStory = res.find(item => {return item['name_en'] === this.recommendName;});
        this.showLoading = false;
      });
    });
  }

}
