import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.less']
})
export class UserInviteComponent implements OnInit {
  showLoading: boolean = false;
  userImg: string = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551707882841&di=66ee26cdc981feac8194e697a58e220e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F02%2F20140902122803_cjEEi.thumb.700_0.jpeg';
  link: string = 'https://www.airbnb.cn/c/157a761?currency=CNY';
  email: string = '';
  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 1000);
  }

  readMore() {
    window.open('https://www.airbnb.cn/help/article/2269', '_blank');
  }
}
