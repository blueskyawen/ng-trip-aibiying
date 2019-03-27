import { Component, OnInit } from '@angular/core';
import { PlusPageService } from './plus-page.service';

@Component({
  selector: 'app-plus-special-house-group',
  templateUrl: './plus-special-house-group.component.html',
  styleUrls: ['./plus-special-house-group.component.less']
})
export class PlusSpecialHouseGroupComponent implements OnInit {
  houseList: any[] = [];
  showLoading: boolean = false;
  constructor(private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.showLoading = true;
    this.plusPageService.getPluSpecialHouseList().subscribe(res => {
      this.houseList = res;
      this.showLoading = false;
    });
  }

  goSpecialHouse(house: any) {

  }

}
