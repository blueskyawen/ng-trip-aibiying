import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-house-detail-order',
  templateUrl: './house-detail-order.component.html',
  styleUrls: ['./house-detail-order.component.less','./house-detail-page.css']
})
export class HouseDetailOrderComponent implements OnInit {
  @Input() houseData: any;
  @Output() informChange = new EventEmitter();
  orderData: any = {
    dateRange: [],
    person: {adult: 0, child: 0, baby: 0}
  };
  tripDateRange: string = '入住日期 - 退房日期';
  isShowDateRange: boolean = false;
  personData = '人数';
  isShowPersonSet: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openDateSelector() {
    this.isShowDateRange = !this.isShowDateRange;
  }

  openPersonSet() {
    this.isShowPersonSet = !this.isShowPersonSet;
  }

  personChange(item: any) {
    if(item) {
      this.personData = (this.orderData.person.adult + this.orderData.person.child) + '人, ' +
          this.orderData.person.baby + '名婴幼儿';
      this.isShowPersonSet = false;
    } else {
      this.orderData.person.adult = 0;
      this.orderData.person.child = 0;
      this.orderData.person.baby = 0;
      this.personData = '人数';
      this.isShowPersonSet  = false;
    }
  }

  dateRangeChange() {
    this.isShowDateRange = false;
    this.tripDateRange = this.orderData.dateRange[0].getMonth() + '月' + this.orderData.dateRange[0].getDate() + '日' + ' - ' +
        this.orderData.dateRange[1].getMonth() + '月' + this.orderData.dateRange[1].getDate() + '日';
  }

  jubao() {
    this.informChange.emit();
  }
}
