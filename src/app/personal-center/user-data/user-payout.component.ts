import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payout',
  templateUrl: './user-payout.component.html',
  styleUrls: ['./user-payout.component.less']
})
export class UserPayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goQuestion() {
    window.open('https://www.airbnb.cn/help/topic/234/how-payouts-work', '_blank');
  }

  goQuestion2() {
    window.open('https://www.airbnb.cn/help/article/425', '_blank');
  }
}
