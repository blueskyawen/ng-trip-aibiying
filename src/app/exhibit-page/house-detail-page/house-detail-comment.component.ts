import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-detail-comment',
  templateUrl: './house-detail-comment.component.html',
  styleUrls: ['./house-detail-comment.component.less']
})
export class HouseDetailCommentComponent implements OnInit {
  @Input() comment: any = {};
  num2s: string = '';
  pressName: any = {
    real: '如实描述', site: '位置便利', contact: '沟通交流', check: '入住顺利', hygiene: '干净卫生', costPerform: '高性价比'
  };
  pressItems: any[] = [];
  pageNum = 0;
  apaceNum = 0;
  commentList: any[] = [];
  isShowPageBar: boolean = false;
  curPageIndex: number = 1;
  constructor() { }

  ngOnInit() {
    for(var key in this.comment.press) {
      if(key !== 'good') {
        this.pressItems.push({name: this.pressName[key], num: this.comment.press[key]});
      }
    }
    this.setComments();
    this.setCommentShow();
  }

  getSiteTime(time: string) {
    let tmpDate = new Date(time);
    return tmpDate.getFullYear() + '年' + tmpDate.getMonth() + '月' + tmpDate.getDay() + '日';
  }

  setComments() {
    let nowDate = new Date();
    this.comment.list.forEach(comment => {
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
    const coommetLenth = this.comment.list.length;
    if(coommetLenth > 6) {
      this.commentList = this.comment.list.slice(0, 6);
      this.pageNum = Math.ceil(coommetLenth / 6);
      this.apaceNum = this.pageNum > 6 ? 6 : this.pageNum;
      this.isShowPageBar = true;
    } else {
      this.commentList = this.comment.list;
    }
  }

  handleIndexChange() {
    if(this.curPageIndex !== this.pageNum) {
      this.commentList = this.comment.list.slice(Math.round(this.curPageIndex * 6 - 6), Math.round(this.curPageIndex * 6 - 6) + 6);
    } else {
      this.commentList = this.comment.list.slice(Math.round(this.curPageIndex * 6 - 6), this.comment.list.length);
    }
  }

}
