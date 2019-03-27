import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plus-inpire-card',
  templateUrl: './plus-inpire-card.component.html',
  styleUrls: ['./plus-inpire-card.component.less']
})
export class PlusInpireCardComponent implements OnInit {
  @Input() inpireHouse: any = {};
  constructor() { }

  ngOnInit() {
  }

}
