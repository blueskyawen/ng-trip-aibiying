import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exper-overview',
  templateUrl: './exper-overview.component.html',
  styleUrls: ['./exper-overview.component.less']
})
export class ExperOverviewComponent implements OnInit {
  shareExpers: any[] = [
    {exper: [
        {
          titleOption: {
            name: 'Jena',
            title: '组织“奥克兰明信片寻根溯源之旅”',
            text: '如今有些参与者会给世界各地的笔友写信，寄明信片，我就是其中之一',
          },
          imgOption: {
            url: 'https://a0.muscache.com/airbnb/static/packages/5b70fed8387ea2930cc1ff08219674e0.jpg',
            disable: false,
            callback: () => {}
          }
        },
        {
          titleOption: {
            name: 'João',
            title: '组织“里斯本大自然探秘”',
            text: '之前，有位从来没有看过海、下过海的女士参与了我的体验。看她在水里开心地到处扑腾让人真心地感到欢乐！',
          },
          imgOption: {
            url: 'https://a0.muscache.com/airbnb/static/packages/a38a0208738d73b5c734cf7c46614c78.jpg',
            disable: false,
            callback: () => {}
          }
        },
        {
          titleOption: {
            name: 'Ben',
            title: '组织“伦敦古典漫游之旅”',
            text: '我带参与者们听了一位小众古典音乐作曲家的作品，他们超爱！这就证明了，大家其实都能对全新的体验敞开心扉。',
          },
          imgOption: {
            url: 'https://a0.muscache.com/airbnb/static/packages/ab1e9cfe29eda05d62eb8e1654b22e50.jpg',
            disable: false,
            callback: () => {}
          }
        }
      ]
    },
    {exper: [
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
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
