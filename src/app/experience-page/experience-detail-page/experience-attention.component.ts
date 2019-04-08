import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-attention',
  templateUrl: './experience-attention.component.html',
  styleUrls: ['./experience-attention.component.less']
})
export class ExperienceAttentionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCancel() {
    this.router.navigate(['/experience/policy']);
  }

  goMore() {
    window.open('https://www.airbnb.cn/help/article/199/what-should-i-do-if-someone-asks-me-to-pay-outside-of-the-airbnb-website',
        '_blank');
  }

}
