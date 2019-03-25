import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exhibit-select',
  templateUrl: './exhibit-select.component.html',
  styleUrls: ['./exhibit-select.component.less']
})
export class ExhibitSelectComponent implements OnInit {
  @Input() type: string = 'normal';
  showButton: any = {
    date: {title: '日期', text: '日期', flag: false, type: 'cancel'},
    person: {title: '人数', text: '人数', flag: false, type: 'cancel'},
    resourceType: {title: '房源类型', text: '房源类型', flag: false, type: 'cancel', showReset: false},
    price: {title: '价格', text: '价格', flag: false, type: 'cancel'},
    book: {title: '闪订', text: '闪订', flag: false, type: 'cancel'},
    area: {title: '位置区域', text: '位置区域', flag: false, type: 'cancel'},
    more: {title: '更多筛选条件', text: '更多筛选条件', flag: false, type: 'cancel'}
  };
  selectData: any = {
    dateRange: [],
    person: {adult: 0, child: 0, baby: 0},
    resourceType: {entire: 0, individual: 0, joint: 0},
    price: {start: 100, end: 200},
    book: false,
    more: {
      house: {bedroom: 0, bed: 0, toilet: 0},
      type: {home: false, business: false},
      moreOption: {goodOwner: false, goodFacility: false},
      amenity: [
        {name: '厨房', title: 'kitchen', checked: 0},
        {name: '洗发水', title: 'liquid', checked: 0},
        {name: '暖气', title: 'central', checked: 0},
        {name: '无线网络', title: 'wifi', checked: 0},
        {name: '早餐', title: 'breadfast', checked: 0},
        {name: '吹风机', title: 'blower', checked: 0}
      ],
      facility: [
        {name: '免费停车位', title: 'park', checked: 0},
        {name: '健身房', title: 'gym', checked: 0},
        {name: '浴缸', title: 'bathtub', checked: 0},
        {name: '游泳池', title: 'swimPool', checked: 0}
      ],
      homeType: [
        {name: '普通民宅', title: 'homestay', checked: 0},
        {name: '公寓', title: 'apartment', checked: 0},
        {name: '别墅', title: 'villa', checked: 0},
        {name: '精品酒店', title: 'hotel', checked: 0},
        {name: 'Loft', title: 'Loft', checked: 0},
        {name: '乡村小屋', title: 'bach', checked: 0}
      ],
      feature: [
        {name: '农家乐', title: 'agritainment', checked: 0},
        {name: '原生宅穴', title: 'original', checked: 0},
        {name: '古巴家庭旅馆', title: 'guba', checked: 0},
        {name: '台湾民宿', title: 'tawan', checked: 0}
      ],
      rule: [
        {name: '适合举办活动', title: 'party', checked: 0},
        {name: '允许携带宠物', title: 'pet', checked: 0},
        {name: '允许吸烟', title: 'smoking', checked: 0}
      ],
      lang: [
        {name: 'English', title: 'English', checked: 0},
        {name: 'Français', title: 'Français', checked: 0},
        {name: 'Deutsch', title: 'Deutsch', checked: 0},
        {name: '日本語', title: 'japanese', checked: 0}
      ]
    }
  };
  constructor() { }

  ngOnInit() {
  }

  dateRangeChange() {
    this.showButton.date.flag = false;
    this.showButton.date.text  = this.selectData.dateRange[0].getMonth() + '月' + this.selectData.dateRange[0].getDate() + '日' + ' - ' +
        this.selectData.dateRange[1].getMonth() + '月' + this.selectData.dateRange[1].getDate() + '日';
    this.showButton.date.type = 'normal';
  }

  personChange(item: any) {
    if(item) {
      this.showButton.person.text = (this.selectData.person.adult + this.selectData.person.child) + '人, ' +
          this.selectData.person.baby + '名婴幼儿';
      this.showButton.person.flag = false;
      this.showButton.person.type = 'normal';
    } else {
      this.selectData.person.adult = 0;
      this.selectData.person.child = 0;
      this.selectData.person.baby = 0;
      this.showButton.person.text = this.showButton.person.title;
      this.showButton.person.flag  = false;
      this.showButton.person.type = 'cancel';
    }
  }

  handleCheckChange() {
    if (this.selectData.resourceType.entire === 1 || this.selectData.resourceType.individual === 1 ||
        this.selectData.resourceType.joint === 1) {
      this.showButton.resourceType.showReset = true;
    } else {
      this.showButton.resourceType.showReset = false;
    }
  }

  cancelResType() {
    this.resetResType();
    this.showButton.resourceType.text = this.showButton.resourceType.title;
    this.showButton.resourceType.flag = false;
    this.showButton.resourceType.type = 'cancel';
  }

  resetResType() {
    this.selectData.resourceType.entire = 0;
    this.selectData.resourceType.individual = 0;
    this.selectData.resourceType.joint = 0;
    this.showButton.resourceType.showReset = false;
  }

  confirmResType() {
    this.showButton.resourceType.flag = false;
    this.showButton.resourceType.text = this.showButton.resourceType.title + ' · ' + this.getResTypeNum();
    this.showButton.resourceType.type = 'normal';
  }

  getResTypeNum() {
    let num = 0;
    for(var key in this.selectData.resourceType) {
      if(this.selectData.resourceType[key] === 1) {
        num++;
      }
    }
    return num;
  }

  cancelPrice() {
    this.selectData.price.start = 0;
    this.selectData.price.end = 0;
    this.showButton.price.flag = false;
    this.showButton.price.type = 'cancel';
    this.showButton.price.text = this.showButton.price.title;
  }

  confirmPrice() {
    this.showButton.price.flag = false;
    this.showButton.price.text = `￥${this.selectData.price.start} - ￥${this.selectData.price.end}`;
    this.showButton.price.type = 'normal';
  }

  cancelBook() {
    this.selectData.book = false;
    this.showButton.book.flag = false;
    this.showButton.book.type = 'cancel';
    this.showButton.book.text = this.showButton.book.title;
  }

  confirmBook() {
    this.showButton.book.flag = false;
    this.showButton.book.type = this.selectData.book ? 'normal' : 'cancel';
  }

  cancelMore() {

  }

  confirmMore() {

  }

}
