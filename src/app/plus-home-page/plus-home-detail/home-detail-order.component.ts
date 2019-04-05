import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-order',
  templateUrl: './home-detail-order.component.html',
  styleUrls: ['./home-detail-order.component.less', '../../exhibit-page/house-detail-page/house-detail-page.css']
})
export class HomeDetailOrderComponent implements OnInit {
  @Input() homeData: any = {};
  isShowOrder: boolean = false;
  constructor() { }

  ngOnInit() {
  }


}
