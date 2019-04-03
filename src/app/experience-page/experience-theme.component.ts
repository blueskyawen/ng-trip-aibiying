import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-theme',
  templateUrl: './experience-theme.component.html',
  styleUrls: ['./experience-theme.component.less']
})
export class ExperienceThemeComponent implements OnInit {
  experThemes: any[] = [
    {
      'categroy': 'history',
      'name': '历史之旅',
      'title': '踏上历史之旅，探究久远年代',
      'imgSrc': 'https://z1.muscache.cn/pictures/03128ad5-7df1-4132-9957-af02dd8ab929.jpg',
      'experNum': 1500,
      'text': '当地达人将介绍各个地标背后的传说故事，并带您一探隐藏在城市巷弄间的生活风貌。'
    },
    {
      'categroy': 'chonglang',
      'name': '冲浪去！',
      'title': '冲浪体验',
      'imgSrc': 'https://z1.muscache.cn/pictures/598ca93e-5954-427b-8a66-a53ab2aeeb9e.jpg',
      'experNum': 100,
      'text': '世界冲浪联盟体验：和世界各地的专业冲浪运动员一起驰骋浪尖'
    },
    {
      'categroy': 'music',
      'name': '音乐会',
      'title': '诚意推出爱彼迎音乐会',
      'imgSrc': 'https://z1.muscache.cn/pictures/341278ea-e6b8-406e-a493-8a4fec8cbdf5.jpg',
      'experNum': 60,
      'text': '现场音乐体验的全新打开方式：在与众不同的场馆里近距离欣赏小型演出。'
    },
    {
      'categroy': 'gongyi',
      'name': '公益体验',
      'title': '社会公益体验',
      'imgSrc': 'https://z1.muscache.cn/pictures/6b82484c-8288-4ffd-aa01-a8829f03bd6f.jpg',
      'experNum': 200,
      'text': '体验新事物的同时支持公益事业。您支付的费用100%投入非营利活动。'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
