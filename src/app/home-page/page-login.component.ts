import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.less']
})
export class PageLoginComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Output() toRegisterEvent = new EventEmitter<boolean>();
  name: string = 'jack';
  skill: string = 'gongfu';
  constructor() { }

  ngOnInit() {
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

  goRegister() {
    this.isDisplay = false;
    this.isDisplayChange.emit(this.isDisplay);
    this.toRegisterEvent.emit();
  }
}
