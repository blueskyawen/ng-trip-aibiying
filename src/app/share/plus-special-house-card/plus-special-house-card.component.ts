import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plus-special-house-card',
  templateUrl: './plus-special-house-card.component.html',
  styleUrls: ['./plus-special-house-card.component.less']
})
export class PlusSpecialHouseCardComponent implements OnInit {
  @Input() house: any = {};
  constructor() { }

  ngOnInit() {
  }

}
