import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageRegisterLoginService } from './page-register-login.service';
import { AuthData} from '../../core/storage-auth';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.less']
})
export class PageRegisterComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Output() toLoginEvent = new EventEmitter<boolean>();
  @Output() regisSuccessEvent = new EventEmitter();
  isShowOthers: boolean = false;
  isShowPhoneReg: boolean = false;
  registerData: any = {name: '', password: '', checkFlag: 1};
  isLoading: boolean = false;
  showMsg: boolean = false;
  showFailMsg: boolean = false;
  allUserList: AuthData[] = [];
  nameErrMsg: string = '用户名已经被注册！';
  isNameConflict: boolean = false;

  constructor(public pageRegisterLoginService: PageRegisterLoginService) { }

  ngOnInit() {
    this.pageRegisterLoginService.getUserList('/api/user/all').subscribe(res => {
      if(res.users) {
        this.allUserList = res.users;
      }
    });
    this.pageRegisterLoginService.regisgterSub$.subscribe(res => {
      if(res === 'success') {
        this.setRegisterSucess();
      } else {
        this.setRegisterFail();
      }
    });
    this.pageRegisterLoginService.getUserListSub$.subscribe(res => {
      this.allUserList = res.users;
    });
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

  goLogin() {
    this.isDisplay = false;
    this.isDisplayChange.emit(this.isDisplay);
    this.toLoginEvent.emit();
  }

  register() {
    if(this.isDisableRegister()) {
      return;
    }
    let postRegisterData = new AuthData(this.registerData.name, this.registerData.password);
    this.isLoading = true;
    this.pageRegisterLoginService.registerUser('/api/user/register', postRegisterData).subscribe(res => {
      if(res.status) {
        if(res.status === 'success') {
          this.setRegisterSucess();
        } else {
          this.setRegisterFail();
        }
      }
    });
  }

  setRegisterSucess() {
    setTimeout(() => {
      this.isLoading = false;
      this.showMsg = true;
      this.isDisplay = false;
      this.isDisplayChange.emit(this.isDisplay);
      this.regisSuccessEvent.emit();
    },1000);
  }

  setRegisterFail() {
    setTimeout(() => {
      this.isLoading = false;
      this.showFailMsg = true;
      this.isDisplay = false;
      this.isDisplayChange.emit(this.isDisplay);
    },1000);
  }

  isDisableRegister() {
    return !this.registerData.name || !this.registerData.password || this.isNameConflict;
  }

  checkFlag(flag: number) {
    if(flag === 1) {
      return flag = 0;
    }
    if(flag === 0) {
      return flag = 1;
    }
  }

  nameInputChange() {
    for(let user of this.allUserList) {
      if(this.registerData.name === user.name) {
        return this.isNameConflict = true;
      }
    }
    this.isNameConflict = false;
  }
}
