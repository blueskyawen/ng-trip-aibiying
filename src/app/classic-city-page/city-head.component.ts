import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-head',
  templateUrl: './city-head.component.html',
  styleUrls: ['./city-head.component.less']
})
export class CityHeadComponent implements OnInit {
  @Input() cityName: string = '';
  @Input() cityId: string = '';
  constructor() { }

  ngOnInit() {
  }

}
