import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experience-order',
  templateUrl: './experience-order.component.html',
  styleUrls: ['./experience-order.component.less']
})
export class ExperienceOrderComponent implements OnInit {
  @Input() experData: any = {};
  @Output() orderChange = new EventEmitter<any>();
  time: any = {
    month: 1,
    day: 1,
    week: '星期一'
  };
  constructor() { }

  ngOnInit() {
    this.setTimeText();
  }

  setTimeText() {
    let data1 = new Date();
    let tmps = ['日', '一', '二', '三', '四', '五', '六'];
    this.time.month = data1.getMonth() + 1;
    this.time.day = data1.getDate();
    this.time.week = '星期' + tmps[data1.getDay()];
  }

  contactIt() {
    this.orderChange.emit();
  }

}
