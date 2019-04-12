import { Component, OnInit, Input } from '@angular/core';
import { PageRegisterLoginService } from './page-register-login/page-register-login.service';

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
  @Input() scene: string = 'home';
  @Input() showSearch: boolean = true;
  @Input() searchText = '';
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
  presentStyle : any = {};
  operStyle : any = {};
  showLoginOffMsg: boolean = false;
  userInfo: any = {info: 0, notify: 0};
  wishList: any[] = [
    {id: '1', name: '厦门鼓浪屿', person: 1, project: 1}
  ];
  constructor(public registerLoginService: PageRegisterLoginService) {
    this.selectedCCY = this.CCYOptions[0];
  }

  ngOnInit() {
    this.presentStyle = {'color': this.scene === 'home' ? '#fff' : '#ff4d4d'};
    this.operStyle = {'color': this.scene === 'home' ? '#fff' : '#666'};
    this.registerLoginService.getLoginUserStorage();
    this.checkLoginState();
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

  isDisplayChange() {
    this.checkLoginState();
  }

  checkLoginState() {
    this.type = this.registerLoginService.isLogined ? 'loginIn' : 'loginOut';
  }

  loginOff() {
    this.registerLoginService.loginOffUser('/api/user/loginOut').subscribe(res => {
      setTimeout(() => {
        this.checkLoginState();
        this.showLoginOffMsg = true;
      },500);
    });
  }
}
