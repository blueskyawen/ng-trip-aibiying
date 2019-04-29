import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-manage-pok',
  templateUrl: './work-manage-pok.component.html',
  styleUrls: ['./work-manage-pok.component.less']
})
export class WorkManagePokComponent implements OnInit {
  workPoks: any[] = [
    {
      img: 'https://z1.muscache.cn/airbnb/static/594e0eb1e34b7880bb86775ada115e3e.jpg',
      title: '高分房源及精品酒店'
    },
    {
      img: 'https://z1.muscache.cn/airbnb/static/3f19ab77dd84b309ac389548e82945e2.jpg',
      title: '团队建设相关体验'
    },
    {
      img: 'https://z1.muscache.cn/airbnb/static/57a5ee7e3810959008122839ce177452.jpg',
      title: '协作空间'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
