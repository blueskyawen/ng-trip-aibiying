import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-landord',
  templateUrl: './home-detail-landord.component.html',
  styleUrls: ['./home-detail-landord.component.less']
})
export class HomeDetailLandordComponent implements OnInit {
  @Input() homeData: any = {};
  constructor() { }

  ngOnInit() {
  }

}
