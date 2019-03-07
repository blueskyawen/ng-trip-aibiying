import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-help-detail',
  templateUrl: './page-help-detail.component.html',
  styleUrls: ['./page-help-detail.component.less']
})
export class PageHelpDetailComponent implements OnInit {
  @Input() question: string;
  constructor() { }

  ngOnInit() {
  }

}
