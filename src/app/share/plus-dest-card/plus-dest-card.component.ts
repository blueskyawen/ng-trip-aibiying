import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plus-dest-card',
  templateUrl: './plus-dest-card.component.html',
  styleUrls: ['./plus-dest-card.component.less']
})
export class PlusDestCardComponent implements OnInit {
  @Input() destination: any;
  constructor() { }

  ngOnInit() {
  }

}
