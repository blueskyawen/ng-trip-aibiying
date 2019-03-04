import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ng-trip-aibiying';
  contents: number[] = [1,2,3];

  constructor() {

  }

  ngOnInit() {
  }
}
