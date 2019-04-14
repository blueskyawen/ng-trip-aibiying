import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-wishs',
  templateUrl: './user-wishs.component.html',
  styleUrls: ['./user-wishs.component.less']
})
export class UserWishsComponent implements OnInit {
  showLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

}
