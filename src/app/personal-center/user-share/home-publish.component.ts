import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-publish',
  templateUrl: './home-publish.component.html',
  styleUrls: ['./home-publish.component.less']
})
export class HomePublishComponent implements OnInit {
  showLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

}
