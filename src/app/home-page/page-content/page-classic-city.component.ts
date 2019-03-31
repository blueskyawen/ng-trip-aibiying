import { Component, OnInit } from '@angular/core';
import { PageContentService } from './page-content.service';

@Component({
  selector: 'app-page-classic-city',
  templateUrl: './page-classic-city.component.html',
  styleUrls: ['./page-classic-city.component.less']
})
export class PageClassicCityComponent implements OnInit {
  cityList: any[] = [];
  constructor(private pageContentService: PageContentService) { }

  ngOnInit() {
    this.pageContentService.getClassicCityList().subscribe(res => {
      this.cityList = res;
    });
  }

}
