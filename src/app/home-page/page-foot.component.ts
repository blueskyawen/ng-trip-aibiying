import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-foot',
  templateUrl: './page-foot.component.html',
  styleUrls: ['./home-page.less']
})
export class PageFootComponent implements OnInit {
  selectedLang: string = 'Chinese';
  langOptions : any[] = [{label: '中文',value: 'Chinese',disable: false},
    {label: '英文',value: 'English',disable: false},
    {label: '韩文',value: 'Korean ',disable: false},
    {label: '日文',value: 'Japanese',disable: false},
    {label: '德文',value: 'Deutsch',disable: false}];
  selectedCCY: string = 'CNY';
  CCYOptions : any[] = [{label: 'CNY人民币',value: 'CNY',disable: false},
    {label: 'USD美元',value: 'USD',disable: false},
    {label: 'JPY日元',value: 'JPY ',disable: false},
    {label: 'HKD港币',value: 'HKD',disable: false},
    {label: 'EUR欧元',value: 'EUR',disable: false},
    {label: 'GBP英镑',value: 'GBP',disable: false}];
  constructor() { }

  ngOnInit() {
  }

}
