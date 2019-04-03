import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-home',
  templateUrl: './experience-home.component.html',
  styleUrls: ['./experience-home.component.less']
})
export class ExperienceHomeComponent implements OnInit {
  showLoading: boolean = true;
  experCategory: any[] = [
    {
      'categroy': 'cate',
      'name': '美食之旅体验',
      'text': '探寻坊间食肆，品尝特色菜式',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/d1b722bd-a3aa-408f-9471-dd5b6e71bd26.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'music',
      'name': '音乐会',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/176a5a82-180b-4146-a05a-e50cb7f7468e.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'nature',
      'name': '大自然',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/a7e59c75-a34d-4964-81e4-894e9b6afa66.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'chonglang',
      'name': '冲浪',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/6973cbe7-f7d4-4de4-be91-95c672efc813.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'recreation',
      'name': '娱乐',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/277a52a3-80c9-48fb-b05d-7ebcbf45847a.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'nightLife',
      'name': '夜生活',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/78ce6c60-319e-4bd9-9bea-4284f4e0270e.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'workshop',
      'name': '体验课和工作坊',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/2f563128-b30d-47a7-a2b4-524014f313c0.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'sport',
      'name': '运动',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/1093fb66-7d05-48fc-9a0c-a478d1d6d6e6.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'art',
      'name': '艺术',
      'text': '由当地艺术家组织的工作坊和课程',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/e68fa5af-8ddc-4129-acf4-b7ceb591039e.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'yangsheng',
      'name': '健康与养生',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/dacf1cdd-9ffe-40e1-b595-0b35aa97de33.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'gongyi',
      'name': '社会公益',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/3ddcf6e8-01f7-4c52-96a4-b0cef620d2da.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    },
    {
      'categroy': 'walk',
      'name': '城市漫步',
      'text': 'Discover live music in unique spaces',
      'imgSrc': 'https://z1.muscache.cn/4ea/air/v2/pictures/c8899404-6980-427c-9c02-a6f953c6a5ed.jpg?t=r:w375-h250-sfit,e:fjpg-c80'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.showLoading = false;
  }

}
