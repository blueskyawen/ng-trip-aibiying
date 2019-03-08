import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.less']
})
export class HomePageComponent implements OnInit {
  contents: number[] = [1,2,3];
  searchData: any = {
    site: '',
    dateRange: {start: new Date(), end: new Date()},
    person: {}
  };
  tripDateRange: string = '入住日期 - 退房日期';
  dateRange : any[] = [];
  isShowDateRange: boolean = false;
  personData = '人数';
  constructor() {
  }

  ngOnInit() {
  }

  openDateSelector() {
    this.isShowDateRange = !this.isShowDateRange;
  }

  dateRangeChange() {
    this.isShowDateRange = false;
    this.tripDateRange = this.dateRange[0].getMonth() + '月' + this.dateRange[0].getDate() + '日' + ' - ' +
        this.dateRange[1].getMonth() + '月' + this.dateRange[1].getDate() + '日';
  }
}
