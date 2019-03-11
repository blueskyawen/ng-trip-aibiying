import { Component, OnInit } from '@angular/core';
import { PageContentService } from './page-content.service';

@Component({
  selector: 'app-page-high-experience',
  templateUrl: './page-high-experience.component.html',
  styleUrls: ['./page-high-experience.component.less']
})
export class PageHighExperienceComponent implements OnInit {
  experList: any[] = [];
  curStar = 1;
  constructor(private pageContentService: PageContentService) { }

  ngOnInit() {
    this.pageContentService.getTripExperList().subscribe(res => {
      this.experList = res;
    });
  }

  goExperStory(item: any) {
    window.open('https://www.airbnb.cn/experiences/411310', '_blank');
  }

  goMoreExper() {
    window.open('https://www.airbnb.cn/s/experiences', '_blank');
  }
}
