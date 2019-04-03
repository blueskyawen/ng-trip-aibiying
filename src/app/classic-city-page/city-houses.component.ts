import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-houses',
  templateUrl: './city-houses.component.html',
  styleUrls: ['./city-houses.component.less']
})
export class CityHousesComponent implements OnInit {
  @Input() houses: any[] = [];
  showHouses: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.showHouses = this.houses.slice(0, 8);
    this.showHouses.forEach(house => {
      house.imgUrl = house.imgs[0];
    });
  }

  goMoreHouses() {
    this.router.navigate(['/exhibit/houselist', 'London']);
  }
}
