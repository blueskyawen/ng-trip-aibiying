import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-order',
  templateUrl: './home-detail-order.component.html',
  styleUrls: ['./home-detail-order.component.less']
})
export class HomeDetailOrderComponent implements OnInit {
  @Input() homeData: any = {};
  constructor() { }

  ngOnInit() {
  }

}
