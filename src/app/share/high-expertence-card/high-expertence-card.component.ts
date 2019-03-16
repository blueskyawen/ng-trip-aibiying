import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-high-expertence-card',
  templateUrl: './high-expertence-card.component.html',
  styleUrls: ['./high-expertence-card.component.less']
})
export class HighExpertenceCardComponent implements OnInit {
  @Input() exper: any = {};
  curStar: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
