import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detail-rule',
  templateUrl: './home-detail-rule.component.html',
  styleUrls: ['./home-detail-rule.component.less']
})
export class HomeDetailRuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goRuleDetail() {
    window.open('https://www.airbnb.cn/home/cancellation_policies?guest_fee_policy=grace_period_48_hours#moderate', '_blank');
  }
}
