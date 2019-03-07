import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.less']
})
export class HomePageComponent implements OnInit {
  contents: number[] = [1,2,3];
  constructor() { }

  ngOnInit() {
  }

}
