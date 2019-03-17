import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExhibitPageService } from './exhibit-page.service';

@Component({
  selector: 'app-play-list-page',
  templateUrl: './play-list-page.component.html',
  styleUrls: ['./play-list-page.component.less']
})
export class PlayListPageComponent implements OnInit {
  image: any = {
    '11': 'https://z1.muscache.cn/4ea/air/v2/pictures/bd0a661a-f77f-4343-a0c9-ad6affa68039.jpg?t=r:w3393-h1356-sfit,e:fjpg-c90',
    '22': 'https://z1.muscache.cn/4ea/air/v2/pictures/cdfda6f6-e9a4-4398-bfaa-200fcedb44ca.jpg?t=r:w3393-h1356-sfit,e:fjpg-c90'
  };
  imgId: string;
  imgHead: any = {
    '11': {
      title: '住进看得见风景的爱彼迎',
      name: '精选国内赏花地，春日暖洋洋',
      text: '春回大地，大自然比人更敏锐地感知这细微的变化。登高远眺，俯瞰漫山遍野的花海；或散步古镇乡间，感受千年古建与花苞绽放的时光碰撞。我们精选了 6 个国内赏花地，抓住春天，住进看得见风景的爱彼迎。'
    },
    '22': {
      title: '住进不一样的樱花季',
      name: '拼假出游，感受北国活力春日',
      text: '4 月底，北海道的春天才刚刚开始，也是赏樱的好时节。像当地人一样，在樱花树下席地而坐，把酒言欢；出门即朝市，在海鲜市场自在寻味，大快朵颐。乐享悠然春日假期，不妨看看我们精选的北海道 5 大人气住宿地。'
    }
  };
  showLoading: boolean = false;
  playSite: any = {};
  playList: any[] = [];
  constructor(private route: ActivatedRoute, private exhibitPageService: ExhibitPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.imgId = params.get('id');
      this.showLoading = true;
      this.exhibitPageService.getPlatList().subscribe(res => {
        this.playSite = res.find(item => { return item.id === this.imgId; });
        if(this.playSite) {
          this.InitPlayData();
        }
      });
    });
  }

  private InitPlayData() {
    this.playList = this.playSite.list;
    this.playList.forEach(play => {
      play.houses.forEach(house => {
        house.imgOption = [];
        house.imgs.forEach(image => {
          house.imgOption.push({
            url: image,
            disable: false,
            callback: () => {}
          });
        });
      });
    });
  }
}
