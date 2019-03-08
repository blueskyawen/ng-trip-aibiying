import { Component, OnInit, Input } from '@angular/core';

class CcyOption {
  label: string;
  value: string;
  disable: boolean
  constructor(label: string,value: string,disable: boolean) {
    this.label = label;
    this.value = value;
    this.disable = disable;
  }
}

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./home-page.less']
})
export class PageHeadComponent implements OnInit {
  @Input() type: string = 'loginOut';
  searchText = '';
  userImg: string = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551707882841&di=66ee26cdc981feac8194e697a58e220e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F02%2F20140902122803_cjEEi.thumb.700_0.jpeg';
  selectedCCY: CcyOption;
  CCYOptions: CcyOption[] = [new CcyOption('人民币-¥','CNY',false),
    new CcyOption('美元-$','USD',false),
    new CcyOption('日元-¥','JPY',false),
    new CcyOption('港币-$','HKD',false),
    new CcyOption('欧元-€','EUR',false),
    new CcyOption('英镑-£','GBP',false),
    new CcyOption('新加坡元-S$','Singapore Dollar',false),
    new CcyOption('韩元-₩','KRW',false),
    new CcyOption('泰铢-฿','THB',false),
    new CcyOption('澳大利亚元-A$','AUD',false),
    new CcyOption('丹麦克朗-Dkr','DKK',false),
    new CcyOption('卢布-₽','RUB',false),
    new CcyOption('墨西哥比索-Mex.$','MXP',false)];
  isShowHelp: boolean = false;
  isShowRegister: boolean = false;
  isShowLogin: boolean = false;
  constructor() {
    this.selectedCCY = this.CCYOptions[0];
  }

  ngOnInit() {
  }

  goToStory() {
    window.open('https://www.airbnb.cn/content','_black')
  }

  selectCCY(option: CcyOption) {
    this.selectedCCY = option;
  }

  handleToLoginEvnent() {
    console.log('handleToLoginEvnent');
    this.isShowLogin = true;
  }

  handleToRegisterEvnent() {
    console.log('handleToRegisterEvnent');
    this.isShowRegister = true;
  }
}
