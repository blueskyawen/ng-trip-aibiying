import { Component, OnInit } from '@angular/core';
import { PlusPageService } from '../plus-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-view-pick',
  templateUrl: './plus-view-pick.component.html',
  styleUrls: ['./plus-view-pick.component.less']
})
export class PlusViewPickComponent implements OnInit {
  homeList: any[] = [];
  constructor(private plusPageService: PlusPageService,
              private router: Router) { }

  ngOnInit() {
    this.plusPageService.getPlusHouseList().subscribe(res => {
      this.homeList = res.slice(0, 6);
      this.homeList.forEach(house => {
        house.imgOption = [];
        house.imgs.forEach(image => {
          house.imgOption.push({
            url: image,
            disable: false,
            callback: () => {this.router.navigate(['/plus/home', house.id]);}
          });
        });
      });
    });
  }

}
