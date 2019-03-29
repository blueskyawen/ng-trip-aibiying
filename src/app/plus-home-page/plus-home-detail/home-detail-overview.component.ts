import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-overview',
  templateUrl: './home-detail-overview.component.html',
  styleUrls: ['./home-detail-overview.component.less']
})
export class HomeDetailOverviewComponent implements OnInit {
  @Input() homeData: any = {};
  constructor() { }

  ngOnInit() {
  }

}
