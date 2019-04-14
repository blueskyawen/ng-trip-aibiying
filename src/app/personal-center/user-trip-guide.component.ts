import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-trip-guide',
  templateUrl: './user-trip-guide.component.html',
  styleUrls: ['./user-trip-guide.component.less']
})
export class UserTripGuideComponent implements OnInit {
  showLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

}
