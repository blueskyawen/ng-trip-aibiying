import { Component, OnInit } from '@angular/core';
import { StoryPageService } from './story-page.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.less']
})
export class StoryDetailComponent implements OnInit {
  storyData: any;
  showLoading: boolean = false;
  textArea: string = '';
  otherStorys: any = [1,2,3,4,5,6,7,8];
  constructor(private storyPageService: StoryPageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.showLoading = true;
      this.storyPageService.getStoryById(id).subscribe(res => {
        console.log(res);
        this.storyData = res;
        this.storyData.site_time = this.storyData['city_zh'] + ' ' +
            this.getSiteTime(this.storyData.time);
        this.setComments();
        this.showLoading = false;
      });
    });
  }

  getSiteTime(time: string) {
    let tmpDate = new Date(time);
    return tmpDate.getFullYear() + '年' + tmpDate.getMonth() + '月' + tmpDate.getDay() + '日';
  }

  setComments() {
    let nowDate = new Date();
    this.storyData.comments.forEach(comment => {
      let tmpDate = new Date(comment.time);
      if(tmpDate.getFullYear() === nowDate.getFullYear()) {
        if(tmpDate.getMonth() + 6 < nowDate.getMonth()) {
          comment.timeText = (nowDate.getMonth() - tmpDate.getMonth()) + '月前';
        } else {
          comment.timeText = this.getSiteTime(comment.time);
        }
      } else {
        if(tmpDate.getMonth() < nowDate.getMonth() + 6) {
          comment.timeText = (nowDate.getMonth() + 12 - tmpDate.getMonth()) + '月前';
        } else {
          comment.timeText = this.getSiteTime(comment.time);
        }
      }
      if (comment.user.name.length === 1) {
        comment.nameText = comment.user.name[0] === this.storyData.user.name ? `${comment.user.name[0]}(作者)` : comment.user.name[0];
      } else {
        comment.nameText = comment.user.name[0] === this.storyData.user.name ? `${comment.user.name[0]}(作者) 回复 ${comment.user.name[1]}` :
            `${comment.user.name[0]} 回复 ${comment.user.name[1]}`;
      }
    });
  }

}
