import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-notify',
  templateUrl: './user-notify.component.html',
  styleUrls: ['./user-notify.component.less']
})
export class UserNotifyComponent implements OnInit {
  userInfo : any = {
    message: {
      email: true, msgPush: false, phoneMsg: false
    },
    contact: {
      email: '******@163.com ', phoneMsg: '+86 *** **** 0560'
    },
    remind: {
      email: true, msgPush: true, phoneMsg: true
    },
    promote: {
      email: true, msgPush: true, phoneMsg: true, phone: false
    },
    pocity: {
      email: true, msgPush: false, phoneMsg: false, phone: false
    },
    support: {
      email: false, msgPush: false, phoneMsg: false
    },
    phoneMsg: ['+86 *** **** 0560']
  };
  labels: any = {
    email: '电子邮件', msgPush: '推送通知', phoneMsg: '短信', phone: '手机号'
  };
  userInfoShow: any = {
    message: [], remind: [], promote: [], pocity: [], support: []
  };
  constructor() { }

  ngOnInit() {
    for(let key in this.userInfo) {
      if(key !== 'phoneMsg' && key !== 'contact') {
        for(let key2 in this.userInfo[key]) {
          this.userInfoShow[key].push({
            label: this.labels[key2],
            checked: this.userInfo[key][key2] ? 1 : 0,
            Disable: false
          });
        }
      }
    }
    console.log(this.userInfoShow);
  }

}
