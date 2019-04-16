import { Component, OnInit } from '@angular/core';
import { PageRegisterLoginService } from '../../home-page/page-register-login/page-register-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-publish',
  templateUrl: './home-publish.component.html',
  styleUrls: ['./home-publish.component.less']
})
export class HomePublishComponent implements OnInit {
  showLoading: boolean = false;
  isShowRegister: boolean = false;
  isShowLogin: boolean = false;
  constructor(public registerLoginService: PageRegisterLoginService,
              private router: Router) { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 1000);
  }

  toMore() {
    window.open('https://www.airbnb.cn/help/article/1626','_blank');
  }

  handleToLoginEvnent() {
    this.isShowLogin = true;
  }

  handleToRegisterEvnent() {
    this.isShowRegister = true;
  }

  isDisplayChange() {
    if(this.registerLoginService.isLogined) {
      this.router.navigate(['/selfCenter/share/beHoster']);
    }
  }

}
