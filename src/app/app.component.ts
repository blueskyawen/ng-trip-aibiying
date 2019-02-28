import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ng-trip-aibiying';
  contents : number[] = [1,2,3,4,5,6];
  slideOptions : any[] = [
    {url: 'https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg',
      disable: false,
      callback: () => {console.log('callback1');}},
    {url: 'https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg',
      disable: false,
      callback: () => {console.log('callback2');}},
    {url: 'https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg',
      disable: false,
      callback: () => {console.log('callback3');}}
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
