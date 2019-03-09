import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.less']
})
export class PageSearchComponent implements OnInit {
  searchData: any = {
    site: '',
    dateRange: [],
    person: {adult: 0, child: 0, baby: 0}
  };
  tripDateRange: string = '入住日期 - 退房日期';
  isShowDateRange: boolean = false;
  personData = '人数';
  isShowPersonSet: boolean = false;
  value3: number = 3;
  constructor() { }

  ngOnInit() {
  }

  openDateSelector() {
    this.isShowDateRange = !this.isShowDateRange;
  }

  dateRangeChange() {
    this.isShowDateRange = false;
    this.tripDateRange = this.searchData.dateRange[0].getMonth() + '月' + this.searchData.dateRange[0].getDate() + '日' + ' - ' +
        this.searchData.dateRange[1].getMonth() + '月' + this.searchData.dateRange[1].getDate() + '日';
  }

  openPersonSet() {
    this.isShowPersonSet = !this.isShowPersonSet;
  }

  clearPersonSt() {
    this.searchData.person.adult = 0;
    this.searchData.person.child = 0;
    this.searchData.person.baby = 0;
    this.personData = '人数';
    this.isShowPersonSet = false;
  }

  confirmPersonSt() {
    this.personData = (this.searchData.person.adult + this.searchData.person.child) + '人, ' +
        this.searchData.person.baby + '名婴幼儿';
    this.isShowPersonSet = false;
  }
}
