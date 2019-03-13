import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-story-recommend-detail',
  templateUrl: './story-recommend-detail.component.html',
  styleUrls: ['./story-recommend-detail.component.less']
})
export class StoryRecommendDetailComponent implements OnInit {
  recommendName: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recommendName = params.get('name');
    });
  }

}
