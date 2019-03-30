import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-site',
  templateUrl: './home-detail-site.component.html',
  styleUrls: ['./home-detail-site.component.less']
})
export class HomeDetailSiteComponent implements OnInit {
  @Input() homeData: any = {};
  constructor() { }

  ngOnInit() {
  }

}
