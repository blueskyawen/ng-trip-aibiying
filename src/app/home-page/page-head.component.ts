import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./home-page.less']
})
export class PageHeadComponent implements OnInit {
  @Input() type: string = 'loginOut';
  searchText = '';
  userImg: string = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551707882841&di=66ee26cdc981feac8194e697a58e220e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F02%2F20140902122803_cjEEi.thumb.700_0.jpeg';
  selectedCCY: string = 'CNY';
  CCYOptions : any[] = [{label: '人民币-¥',value: 'CNY',disable: false},
    {label: '美元-$',value: 'USD',disable: false},
    {label: '日元-¥',value: 'JPY ',disable: false},
    {label: '港币-$',value: 'HKD',disable: false},
    {label: '欧元-€',value: 'EUR',disable: false},
    {label: '英镑-£',value: 'GBP',disable: false},
    {label: '新加坡元-S$',value: 'Singapore Dollar',disable: false},
    {label: '韩元-₩',value: 'KRW',disable: false},
    {label: '泰铢-฿',value: 'THB',disable: false},
    {label: '澳大利亚元-A$',value: 'AUD',disable: false},
    {label: '丹麦克朗-Dkr',value: 'DKK',disable: false},
    {label: '卢布-₽',value: 'RUB ',disable: false},
    {label: '墨西哥比索-Mex.$',value: 'MXP',disable: false}];
  isShowHelp: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  goToStory() {
    window.open('https://www.airbnb.cn/content','_black')
  }

}
