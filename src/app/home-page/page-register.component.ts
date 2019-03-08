import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.less']
})
export class PageRegisterComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Output() toLoginEvent = new EventEmitter<boolean>();
  isShowOthers: boolean = false;
  isShowPhoneReg: boolean = false;
  registerData: any = {phone: '', password: '', checkFlag: 1};
  isLoading: boolean = false;
  showMsg: boolean = false;
  constructor() { }

  ngOnInit() {
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
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.showMsg = true;
      this.isDisplay = false;
      this.isDisplayChange.emit(this.isDisplay);
    },2000);
  }

  isDisableRegister() {
    return !this.registerData.phone || !this.registerData.password;
  }

  checkFlag(flag: number) {
    if(flag === 1) {
      return flag = 0;
    }
    if(flag === 0) {
      return flag = 1;
    }
  }
}
