import { Component, OnInit } from '@angular/core';
import { PlusPageService } from './plus-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-special-house-group',
  templateUrl: './plus-special-house-group.component.html',
  styleUrls: ['./plus-special-house-group.component.less']
})
export class PlusSpecialHouseGroupComponent implements OnInit {
  houseList: any[] = [];
  showLoading: boolean = false;
  constructor(private plusPageService: PlusPageService,
              private router: Router) { }

  ngOnInit() {
    this.showLoading = true;
    this.plusPageService.getPluSpecialHouseList().subscribe(res => {
      this.houseList = res;
      setTimeout(() => {this.showLoading = false;}, 200);
    });
  }

  goSpecialHouse(house: any) {
    this.router.navigate(['/plus/home', house.id]);
  }

}
