import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-order',
  templateUrl: './home-order.component.html',
  styleUrls: ['./home-order.component.less', '../../exhibit-page/house-detail-page/house-detail-page.css']
})
export class HomeOrderComponent implements OnInit {
  @Input() isShowOrder: boolean = false;
  @Output() isShowOrderChange = new EventEmitter<boolean>();
  @Input() homeData: any = {};
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

  showChange() {
    this.isShowOrderChange.emit(this.isShowOrder);
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
}
