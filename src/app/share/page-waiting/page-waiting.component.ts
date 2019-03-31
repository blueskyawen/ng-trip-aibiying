import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-waiting',
  templateUrl: './page-waiting.component.html',
  styleUrls: ['./page-waiting.component.less']
})
export class PageWaitingComponent implements OnInit {
  @Input() size: string = 'medium';
  constructor() { }

  ngOnInit() {
  }

}
