import { Component, OnInit } from '@angular/core';
import { PageRegisterLoginService } from '../home-page/page-register-login/page-register-login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit {
  showLoading: boolean = false;
  showDbHead: boolean = true;
  userData: any;
  userImg: string = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551707882841&di=66ee26cdc981feac8194e697a58e220e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F02%2F20140902122803_cjEEi.thumb.700_0.jpeg';
  messages: any[] = [];
  constructor(public pRLoginService: PageRegisterLoginService) { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

}
