import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-experiences',
  templateUrl: './city-experiences.component.html',
  styleUrls: ['./city-experiences.component.less']
})
export class CityExperiencesComponent implements OnInit {
  @Input() experience: any = {};
  constructor() { }

  ngOnInit() {
  }

  goMoreExpers() {

  }

}
