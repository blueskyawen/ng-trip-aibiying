import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-plus-view-owner',
  templateUrl: './plus-view-owner.component.html',
  styleUrls: ['./plus-view-owner.component.less']
})
export class PlusViewOwnerComponent implements OnInit {
  ownerList: any[] = [
    {
      name: 'Mark',
      title: '伦敦的房东，从2016年开始出租房源',
      src: 'https://a0.muscache.com/v/b3/0f/b30fd2ce-3d90-4313-955e-37037a81ed73/7ff3d7f3017f54748ba3f364b2997865_800k_2.mp4',
      image: 'https://a0.muscache.com/4ea/air/r:w333-h5330-sfit,e:fjpg-c80/pictures/SelectGuestLandingPage/hosts_poster_mark/o' +
          'riginal/0d7703a8-8845-49e4-b403-f81bf6fe26ae.jpg',
      isPaused: true
    },
    {
      name: 'Jo-Ann',
      title: '洛杉矶的房东，从2012年开始出租房源',
      src: 'https://a0.muscache.com/v/a0/5c/a05c8710-b1d0-452e-981a-8163cbbceea0/11fb7298f7d65b6f97cfd9621a0008a6_800k_2.mp4',
      image: 'https://a0.muscache.com/4ea/air/r:w333-h5330-sfit,e:fjpg-c80/pictures/SelectGuestLandingPage/hosts_post' +
          'er_jo/original/ceba5491-4434-4379-a275-fb9bd818a67b.jpg',
      isPaused: true
    },
    {
      name: 'Jane',
      title: '上海的房东，从2015年开始出租房源',
      src: 'https://a0.muscache.com/v/1a/9c/1a9c383c-340c-42b5-bfcc-d2ccae7e9555/b3032d339d5f5ba2a522d465571e1c72_800k_2.mp4',
      image: 'https://a0.muscache.com/4ea/air/r:w333-h5330-sfit,e:fjpg-c80/pictures/SelectGuestLandingPage/hosts_poster_jane/or' +
          'iginal/34d7fe7b-404f-43ff-b631-02e192752992.jpg',
      isPaused: true
    }
  ];
  @ViewChild('onwnerVideo1')
  myoOwnVideo1: ElementRef;
  @ViewChild('onwnerVideo2')
  myoOwnVideo2: ElementRef;
  @ViewChild('onwnerVideo3')
  myoOwnVideo3: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  playOrPauseItem(item: any) {
    let operDom: any;
    if(item.name === 'Mark') {
      operDom = this.myoOwnVideo1;
    }
    if(item.name === 'Jo-Ann') {
      operDom = this.myoOwnVideo2;
    }
    if(item.name === 'Jane') {
      operDom = this.myoOwnVideo3;
    }

    if(item.isPaused) {
      operDom.nativeElement.play();
    } else {
      operDom.nativeElement.pause();
    }
    item.isPaused = !item.isPaused;
  }

}
