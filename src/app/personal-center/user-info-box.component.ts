import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-box',
  templateUrl: './user-info-box.component.html',
  styleUrls: ['./user-info-box.component.less']
})
export class UserInfoBoxComponent implements OnInit {
  showLoading: boolean = false;
  infoOptions: any[] = [
    {label: '全部消息(0)',value: 'all',disable: false},
    {label: '未读(0)',value: 'unread',disable: false},
    {label: '待处理(0)',value: 'pending',disable: false},
    {label: '已归档(0)',value: 'archived',disable: false}
  ];
  infoData: any = {
    all: [],
    unread: [],
    pending: [],
    archived: []
  };
  selectedInfo: string = 'all';
  showInfoList: any[] = [];
  constructor() { }

  ngOnInit() {
    this.infoOptions[0].label = `全部消息(${this.infoData.unread.length+this.infoData.pending.length+this.infoData.archived.length})`;
    this.infoOptions[1].label = `未读(${this.infoData.unread.length})`;
    this.infoOptions[2].label = `待处理(${this.infoData.pending.length})`;
    this.infoOptions[3].label = `已归档(${this.infoData.archived.length})`;
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 1000);
  }

  labelChange() {
    this.showInfoList = this.infoData[this.selectedInfo];
  }
}
