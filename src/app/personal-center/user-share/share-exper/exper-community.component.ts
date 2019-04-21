import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exper-community',
  templateUrl: './exper-community.component.html',
  styleUrls: ['./exper-community.component.less']
})
export class ExperCommunityComponent implements OnInit {
  communityList: any[] = [
    {
      name: 'DJ Jigüe',
      title: 'Jigüe热衷于分享自己对古巴黑人音乐的热爱。听完他介绍古巴厚重的音乐史，有些参与者甚至去了德州的奥斯汀看他演出。',
      src: 'https://a0.muscache.com/airbnb/static/packages/33fe292c03db35d3368964246e56ca41.jpg'
    },
    {
      name: 'Toby',
      title: 'Toby在她旧金山的家中接待过许多爱彼迎房客。现在，她还开放了自己的艺术工作室，教授绘画技巧，学员中有游客也有当地人。',
      src: 'https://a0.muscache.com/airbnb/static/packages/443df6cb6e01bb61f34b244037eb7186.jpg'
    },
    {
      name: 'Cici',
      title: '烹饪体验达人Cici是上海人，她相信烹饪能够带来幸福。 她欢迎参与者来到她的厨房，学习如何以有趣的方式制作经典中式饺子。',
      src: 'https://a0.muscache.com/airbnb/static/packages/e2ab4d5ae2978a0144155fc617d6a3e2.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
