import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-share-head',
  templateUrl: './know-share-head.component.html',
  styleUrls: ['./know-share-head.component.less']
})
export class KnowShareHeadComponent implements OnInit {
  startShare: any = {
    city: '上海',
    rental: 'Entire house',
    person: 2
  };
  rentalOptions : any[] = [{label: '整个房源',value: 'Entire house',disable: false},
    {label: '独立房间',value: 'Separate room',disable: false},
    {label: '合住房间',value: 'Shared room',disable: false}];
  options2 : any[] = [{label: '1位房客',value: 1,disable: false},
                      {label: '2位房客',value: 2,disable: false},
                      {label: '3位房客',value: 3,disable: false},
                      {label: '4位房客',value: 4,disable: false},
                      {label: '5位房客',value: 5,disable: false},
                      {label: '6位房客',value: 6,disable: false},
                      {label: '7位房客',value: 7,disable: false},
                      {label: '8位房客',value: 8,disable: false},
                      {label: '9位房客',value: 9,disable: false}];
  constructor() { }

  ngOnInit() {
  }

}
