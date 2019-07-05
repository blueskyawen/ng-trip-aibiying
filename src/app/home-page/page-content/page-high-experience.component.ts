import { Component, OnInit } from '@angular/core';
import { PageContentService } from './page-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-high-experience',
  templateUrl: './page-high-experience.component.html',
  styleUrls: ['./page-high-experience.component.less']
})
export class PageHighExperienceComponent implements OnInit {
  experList: any[] = [];
  mdHideIndexs : number[] = [4, 5, 6, 7];
  constructor(private pageContentService: PageContentService, private router: Router) { }

  ngOnInit() {
    this.pageContentService.getTripExperList().subscribe(res => {
      this.experList = res;
    });
  }

  goExperStory(item: any) {
    this.router.navigate(['/experience', item.id]);
  }

  goMoreExper() {
    this.router.navigate(['/experience/home']);
  }
}
