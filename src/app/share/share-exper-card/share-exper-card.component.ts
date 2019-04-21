import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-exper-card',
  templateUrl: './share-exper-card.component.html',
  styleUrls: ['./share-exper-card.component.less']
})
export class ShareExperCardComponent implements OnInit {
  @Input() expers: any[] = [];
  imgOptions: any[] = [];
  titleOptions: any[] = [];
  curStar: number = 5;
  showFoot: boolean = false;
  showTitle: boolean = true;
  curIndex: number = 0;
  constructor() { }

  ngOnInit() {
    this.expers.forEach(item => {
      this.titleOptions.push(item.titleOption);
      this.imgOptions.push(item.imgOption);
    });
  }

}
