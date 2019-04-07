import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience-comments',
  templateUrl: './experience-comments.component.html',
  styleUrls: ['./experience-comments.component.less']
})
export class ExperienceCommentsComponent implements OnInit {
  @Input() experData: any = {};
  pageNum = 0;
  apaceNum = 0;
  commentList: any[] = [];
  isShowPageBar: boolean = false;
  curPageIndex: number = 1;
  constructor() { }

  ngOnInit() {
    this.setComments();
    this.setCommentShow();
  }

  getSiteTime(time: string) {
    let tmpDate = new Date(time);
    return tmpDate.getFullYear() + '年' + tmpDate.getMonth() + '月' + tmpDate.getDay() + '日';
  }

  setComments() {
    let nowDate = new Date();
    this.experData.comments.forEach(comment => {
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
        comment.nameText = comment.user.name[0];
      } else {
        comment.nameText = `${comment.user.name[0]} 回复 ${comment.user.name[1]}`;
      }
    });
  }

  setCommentShow() {
    const coommetLenth = this.experData.comments.length;
    if(coommetLenth > 5) {
      this.commentList = this.experData.comments.slice(0, 5);
      this.pageNum = Math.ceil(coommetLenth / 5);
      this.apaceNum = this.pageNum > 6 ? 6 : this.pageNum;
      this.isShowPageBar = true;
    } else {
      this.commentList = this.experData.comments;
    }
  }

  handleIndexChange() {
    if(this.curPageIndex !== this.pageNum) {
      this.commentList = this.experData.comments.slice(Math.round(this.curPageIndex * 5 - 5), Math.round(this.curPageIndex * 5 - 5) + 5);
    } else {
      this.commentList = this.experData.comments.slice(Math.round(this.curPageIndex * 5 - 5), this.experData.comments.length);
    }
  }

}
