import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-share',
  templateUrl: './know-share.component.html',
  styleUrls: ['./know-share.component.less']
})
export class KnowShareComponent implements OnInit {
  showLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

}
