import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plus-house-card',
  templateUrl: './plus-house-card.component.html',
  styleUrls: ['./plus-house-card.component.less']
})
export class PlusHouseCardComponent implements OnInit {
  @Input() plusHouse: any;
  @Input() showLove: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
