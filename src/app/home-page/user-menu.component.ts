import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  @Input() isDisplay = false;
  @Output() isDisplayChange = new EventEmitter<any>();
  @Output() selectMenuChange = new EventEmitter<string>();
  @Input() loginType = 'loginOut';

  constructor() { }

  ngOnInit() {
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

  selectMenu(type : string) {
    this.isDisplayChange.emit(false);
    this.selectMenuChange.emit(type);
  }

}
