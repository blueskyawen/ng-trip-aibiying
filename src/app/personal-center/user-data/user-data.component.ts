import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.less']
})
export class UserDataComponent implements OnInit {
  showLoading: boolean = false;
  tabItems: any[] = [
    {
      label: '通知',
      name: 'notify'
    },
    {
      label: '付款方式',
      name: 'payment'
    },
    {
      label: '收款偏好',
      name: 'payout'
    },
    {
      label: '隐私',
      name: 'privacy'
    },
    {
      label: '绑定的应用',
      name: 'apps'
    },
    {
      label: '徽章',
      name: 'badge'
    }
  ];
  curTab: string = 'notify';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.showLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.curTab = params.get('tab');
      setTimeout(() => {this.showLoading = false;}, 1000);
    });
  }

  switchTab(item: any) {
    this.curTab = item.name;
  }

}
