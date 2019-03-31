import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-home-fatify',
  templateUrl: './plus-home-fatify.component.html',
  styleUrls: ['./plus-home-fatify.component.less']
})
export class PlusHomeFatifyComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Input() fatify: any = {};
  @Output() isDisplayChange = new EventEmitter<boolean>();
  fatifyList: any[] = [];
  fatifyName: any = {
    basic: '该房屋的特别便利设施',
    other: '你所需的一切',
    noHave: '未配备设施'
  };
  fatifyLabel: any = {
    basic: '该房源配备了以下独特便利设施',
    other: '这处爱彼迎Plus房源提供以下便利设施。',
    noHave: '此房源没有以下便利设施。'
  };
  constructor() { }

  ngOnInit() {
    for(var key in this.fatify) {
      this.fatifyList.push({
        key: key,
        name: this.fatifyName[key],
        label: this.fatifyLabel[key],
        list: this.fatify[key]
      });
    }
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }
}
