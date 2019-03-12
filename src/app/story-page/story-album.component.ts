import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-album',
  templateUrl: './story-album.component.html',
  styleUrls: ['./story-album.component.less']
})
export class StoryAlbumComponent implements OnInit {
  albums: any[] = [
    {
      'id': 1,
      'name': '城市合辑',
      'title': ['北京竟然有这些', '不可思议的酒吧'],
      'imgUrl': 'https://z1.muscache.cn/4ea/air/c:w2-h1-go,r:w1440-h720-sfit,e:fjpg-c75/pictures/be97d012-9f57-4cda-ac32-422cd7723187.jpg'
    },
    {
      'id': 2,
      'name': '爱彼迎民宿指南',
      'title': ['住进「山水间」', '在民宿中亲近自然'],
      'imgUrl': 'https://z1.muscache.cn/4ea/air/c:w2-h1-go,r:w1440-h720-sfit,e:fjpg-c75/pictures/8b0dd5cb-e5fd-4bc5-aca3-f9c5f750fa25.jpg'
    },
    {
      'id': 3,
      'name': '爱彼迎民宿指南',
      'title': ['住进「旧时光」', '在民宿中重拾历史'],
      'imgUrl': 'https://z1.muscache.cn/4ea/air/c:w2-h1-go,r:w1440-h720-sfit,e:fjpg-c75/pictures/c182c81c-86f0-40ee-b8e4-4a8d9fe9f846.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
