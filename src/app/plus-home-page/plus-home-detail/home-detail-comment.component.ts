import { Component, OnInit, Input } from '@angular/core';
import { PlusPageService } from '../plus-page.service';

@Component({
  selector: 'app-home-detail-comment',
  templateUrl: './home-detail-comment.component.html',
  styleUrls: ['./home-detail-comment.component.less']
})
export class HomeDetailCommentComponent implements OnInit {
  @Input() homeData: any = {};
  viewComments: any[] = [];
  isShowComments: boolean = false;
  commentHead: string = '';
  constructor(private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.setComments();
    this.viewComments = this.homeData.comments.slice(0, 6);
    this.commentHead = `${this.homeData.comments.length}条评价`;
  }

  setComments() {
    let nowDate = new Date();
    this.homeData.comments.forEach(comment => {
      let tmpDate = new Date(comment.time);
      if(tmpDate.getFullYear() === nowDate.getFullYear()) {
        if(tmpDate.getMonth() + 6 < nowDate.getMonth()) {
          comment.timeText = (nowDate.getMonth() - tmpDate.getMonth()) + '月前';
        } else {
          comment.timeText = this.plusPageService.getSiteTime(comment.time);
        }
      } else {
        if(tmpDate.getMonth() < nowDate.getMonth() + 6) {
          comment.timeText = (nowDate.getMonth() + 12 - tmpDate.getMonth()) + '月前';
        } else {
          comment.timeText = this.plusPageService.getSiteTime(comment.time);
        }
      }
      if (comment.user.name.length === 1) {
        comment.nameText = comment.user.name[0];
      } else {
        comment.nameText = `${comment.user.name[0]} 回复 ${comment.user.name[1]}`;
      }
    });
  }

}
