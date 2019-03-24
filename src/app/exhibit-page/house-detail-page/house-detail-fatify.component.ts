import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-house-detail-fatify',
  templateUrl: './house-detail-fatify.component.html',
  styleUrls: ['./house-detail-fatify.component.less']
})
export class HouseDetailFatifyComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Input() fatify: any = {};
  fatifyObs: any = [
    {name: '基本设施', list: []}, {name: '配套设施', list: []}, {name: '儿童设施', list: []}, {name: '安全设施', list: []}
  ];
  constructor() { }

  ngOnInit() {
    this.fatifyObs[0].list = this.fatify.basic;
    this.fatifyObs[1].list = this.fatify.advance;
    this.fatifyObs[2].list = this.fatify.kid;
    this.fatifyObs[3].list = this.fatify.safe;
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }
}

