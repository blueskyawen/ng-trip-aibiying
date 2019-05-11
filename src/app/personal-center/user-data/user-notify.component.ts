import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../self-center.service';

@Component({
  selector: 'app-user-notify',
  templateUrl: './user-notify.component.html',
  styleUrls: ['./user-notify.component.less']
})
export class UserNotifyComponent implements OnInit {
  userInfo : any = {};
  labels: any = {
    email: '电子邮件', msgPush: '推送通知', phoneMsg: '短信', phone: '手机号'
  };
  userInfoShow: any = {
    message: [], remind: [], promote: [], pocity: [], support: []
  };
  phoneOptions : any[] = [];

  showMsg: boolean = false;
  showErrorMsg: boolean = false;
  constructor(private selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.selfCenterService.getUserData('/api/user/data').subscribe(res => {
      this.userInfo = res.data;
      this.initUserInfo();
    });
  }

  initUserInfo() {
    this.userInfoShow = {message: [], remind: [], promote: [], pocity: [], support: []};
    this.phoneOptions = [];
    for(let key in this.userInfo) {
      if(key !== 'phoneMsg' && key !== 'contact') {
        for(let key2 in this.userInfo[key]) {
          this.userInfoShow[key].push({
            keyzz: key2,
            label: this.labels[key2],
            checked: this.userInfo[key][key2] ? 1 : 0,
            Disable: false
          });
        }
      }
    }
    this.userInfo.phoneMsg.phones.forEach(phone => {
      this.phoneOptions.push({
        label: phone, value: phone, disable: false
      });
    });
  }

  confirmUserNotify() {
    this.setUserNotifyData();
    this.selfCenterService.postUserData('/api/user/data', this.userInfo).subscribe(res => {
      if(res.status === 'success') {
        this.setSucess();
      } else {
        this.setFail();
      }
    });
  }

  setSucess() {
    this.showMsg = true;
    setTimeout(() => {
      this.getUserInfo();
    },1000);
  }

  setFail() {
    this.showErrorMsg = true;
  }

  setUserNotifyData() {
    for(let key in this.userInfoShow) {
      this.userInfoShow[key].forEach(userInfo => {
        this.userInfo[key][userInfo.keyzz] = !!userInfo.checked;
      });
    }
  }

}
