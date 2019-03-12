import { Component, OnInit } from '@angular/core';
import { StoryPageService } from './story-page.service';

@Component({
  selector: 'app-story-recomend',
  templateUrl: './story-recomend.component.html',
  styleUrls: ['./story-recomend.component.less']
})
export class StoryRecomendComponent implements OnInit {
  recommends: any[] = [];
  constructor(private storyPageService: StoryPageService) { }

  ngOnInit() {
    this.storyPageService.getStoryRecommends().subscribe(res => {
      this.recommends = res.slice(0,3);
    });
  }

}
