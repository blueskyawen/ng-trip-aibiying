import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-detail-foot',
  templateUrl: './home-detail-foot.component.html',
  styleUrls: ['./home-detail-foot.component.less']
})
export class HomeDetailFootComponent implements OnInit {
  @Input() homeData: any = {};
  isShowOrder: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
