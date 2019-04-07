import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-attention',
  templateUrl: './experience-attention.component.html',
  styleUrls: ['./experience-attention.component.less']
})
export class ExperienceAttentionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goCancel() {
    window.open('https://www.airbnb.cn/experiences/cancellation-policy', '_blank');
  }

  goMore() {
    window.open('https://www.airbnb.cn/help/article/199/what-should-i-do-if-someone-asks-me-to-pay-outside-of-the-airbnb-website',
        '_blank');
  }

}
