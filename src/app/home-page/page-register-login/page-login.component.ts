import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageRegisterLoginService } from './page-register-login.service';
import { AuthData} from '../../core/storage-auth';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.less']
})
export class PageLoginComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Output() toRegisterEvent = new EventEmitter<boolean>();
  loginData: any = {name: '', password: '', checkFlag: 1};
  isLoading: boolean = false;
  showMsg: boolean = false;
  showErrorMsg: boolean = false;
  constructor(private pageRegisterLoginService: PageRegisterLoginService) { }

  ngOnInit() {
    this.pageRegisterLoginService.loginSub$.subscribe(res => {
      if(res === 'success') {
        this.setLoginSucess();
      } else {
        this.setLoginFail();
      }
    });
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

  goRegister() {
    this.isDisplay = false;
    this.isDisplayChange.emit(this.isDisplay);
    this.toRegisterEvent.emit();
  }

  checkFlag(flag: number) {
    if(flag === 1) {
      return flag = 0;
    }
    if(flag === 0) {
      return flag = 1;
    }
  }

  isDisableLogin() {
    return !this.loginData.name || !this.loginData.password;
  }

  login() {
    let postLoginData = new AuthData(this.loginData.name, this.loginData.password);
    this.isLoading = true;
    this.pageRegisterLoginService.loginUser('/api/user/login', postLoginData).subscribe(res => {
      if(res.status) {
        if(res.status === 'success') {
          this.setLoginSucess();
        } else {
          this.setLoginFail();
        }
      }
    });
  }

  setLoginSucess() {
    setTimeout(() => {
      this.isLoading = false;
      this.showMsg = true;
      this.isDisplay = false;
      this.isDisplayChange.emit(this.isDisplay);
    },1000);
  }

  setLoginFail() {
    setTimeout(() => {
      this.isLoading = false;
      this.showErrorMsg = true;
      this.isDisplay = false;
      this.isDisplayChange.emit(this.isDisplay);
    },1000);
  }

  getPasswdBack() {
    console.log('getPasswdBack');
  }
}
