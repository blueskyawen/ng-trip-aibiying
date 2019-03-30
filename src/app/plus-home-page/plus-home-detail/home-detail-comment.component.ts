import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-detail-comment',
  templateUrl: './home-detail-comment.component.html',
  styleUrls: ['./home-detail-comment.component.less']
})
export class HomeDetailCommentComponent implements OnInit {
  @Input() homeData: any = {};
  constructor() { }

  ngOnInit() {
  }

}
