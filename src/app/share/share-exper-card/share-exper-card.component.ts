import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-exper-card',
  templateUrl: './share-exper-card.component.html',
  styleUrls: ['./share-exper-card.component.less']
})
export class ShareExperCardComponent implements OnInit {
  @Input() expers: any[] = [
    {
      titleOption: {
        name: 'Darragh',
        title: '“都柏林秘事”的体验参与者',
        text: '这次超棒的体验离不开Tonie对爱尔兰LGBTQ历史的深入了解。',
      },
      imgOption: {
        url: 'https://a0.muscache.com/airbnb/static/packages/212f5e020d4ce132d5ec35d0faa673e9.jpg',
        disable: false,
        callback: () => {}
      }
    },
    {
      titleOption: {
        name: 'Simona',
        title: '“哈瓦那文化跑”的体验参与者',
        text: '和Gelin一起跑步是我在古巴最棒的记忆之一。他是个有趣的人，对历史也非常了解。',
      },
      imgOption: {
        url: 'https://a0.muscache.com/airbnb/static/packages/c263e214a4d3f6adb6d511181e0a8425.jpg',
        disable: false,
        callback: () => {}
      }
    },
    {
      titleOption: {
        name: 'Tim',
        title: '“圣克鲁斯野菜采集”的体验参与者',
        text: 'Caitlin的活力太感染人了，在野外觅食方面，她不但知识渊博还满怀热情。',
      },
      imgOption: {
        url: 'https://a0.muscache.com/airbnb/static/packages/1e2d5c4199c41ca8b22490ef7bb7d28c.jpg',
        disable: false,
        callback: () => {}
      }
    }
  ];
  imgOptions: any[] = [];
  titleOptions: any[] = [];
  curStar: number = 5;
  showFoot: boolean = false;
  showTitle: boolean = true;
  curIndex: number = 0;
  constructor() { }

  ngOnInit() {
    this.expers.forEach(item => {
      this.titleOptions.push(item.titleOption);
      this.imgOptions.push(item.imgOption);
    });
  }

}
