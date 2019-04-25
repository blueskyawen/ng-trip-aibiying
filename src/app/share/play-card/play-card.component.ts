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
  @Input() height: string = '200px';
  imgStyles : any = {'height': '200px'};
  constructor() { }

  ngOnInit() {
    if(this.height) {
      this.imgStyles = {'height': this.height};
    }
  }

  loveTheHouse() {
    this.loveHouseChange.emit();
  }

}
