import { Component, OnInit } from '@angular/core';
import { PlusPageService } from '../plus-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-detail-others',
  templateUrl: './home-detail-others.component.html',
  styleUrls: ['./home-detail-others.component.less']
})
export class HomeDetailOthersComponent implements OnInit {
  otherHomes: any[] = [];
  showLoading: boolean = false;
  constructor(private plusPageService: PlusPageService,
              private router: Router) { }

  ngOnInit() {
    this.showLoading = true;
    this.plusPageService.getPlusHouseList().subscribe(res => {
      this.otherHomes = res.slice(0, 8);
      this.otherHomes.forEach(home => {
        home.imgOption = [];
        home.imgs.forEach(image => {
          home.imgOption.push({
            url: image,
            disable: false,
            callback: () => {this.router.navigate(['/plus/home', home.id]);}
          });
        });
      });
      this.showLoading = false;
    });
  }

}
