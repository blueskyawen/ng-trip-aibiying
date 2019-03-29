import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlusPageService } from '../plus-page.service';

@Component({
  selector: 'app-plus-home-detail',
  templateUrl: './plus-home-detail.component.html',
  styleUrls: ['./plus-home-detail.component.less']
})
export class PlusHomeDetailComponent implements OnInit {
  homeId: string;
  showLoading: boolean = false;
  homeData: any;

  constructor(private plusPageService: PlusPageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.homeId = params.get('id');
      this.showLoading = true;
      this.plusPageService.getPlusHomeInfo(this.homeId).subscribe(res => {
        this.homeData = res;
        this.initHomeData();
        this.showLoading = false;
      });
    });
  }

  initHomeData() {
    this.homeData.viewPhotos = [];
    let index = 0;
    this.homeData.photos.forEach(photo => {
      this.homeData.viewPhotos.push({
        id: index++,
        src: photo.src,
        title: photo.name,
        alt: photo.name
      });
    });
  }

}
