import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-experiences',
  templateUrl: './city-experiences.component.html',
  styleUrls: ['./city-experiences.component.less']
})
export class CityExperiencesComponent implements OnInit {
  @Input() experience: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goMoreExpers() {
    if(this.experience.categroy === 'highPress') {
      this.router.navigate(['/experience/list', 'all', {city: 'London', showCategory: true}]);
    } else {
      this.router.navigate(['/experience/list', this.experience.categroy, {city: 'London'}]);
    }
  }

}
