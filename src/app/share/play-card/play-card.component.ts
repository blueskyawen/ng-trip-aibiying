import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.less']
})
export class PlayCardComponent implements OnInit {
  @Input() playHouse: any;
  @Input() city: string;
  @Input() showLove: boolean = false;
  @Input() showFality: boolean = false;
  @Input() showUser: boolean = false;
  @Output() loveHouseChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  loveTheHouse() {
    this.loveHouseChange.emit();
  }

}
