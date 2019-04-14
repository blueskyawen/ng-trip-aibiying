import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-journey',
  templateUrl: './my-journey.component.html',
  styleUrls: ['./my-journey.component.less']
})
export class MyJourneyComponent implements OnInit {
  showLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

}
