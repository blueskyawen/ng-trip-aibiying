import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.less']
})
export class UserPaymentComponent implements OnInit {
  payOptions: any[] = [
    {label: '所有可用礼金券', value: 'availables',disable: false},
    {label: '所有不可用礼金券', value: 'unavailables',disable: false}
  ];
  selectPay: string = 'availables';
  lijinquan: string = '';

  showMsg: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addLijinquan() {
    if(!this.lijinquan) {
      return;
    }
    this.showMsg = true;
  }
}
