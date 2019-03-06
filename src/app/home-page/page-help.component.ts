import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-help',
  templateUrl: './page-help.component.html',
  styleUrls: ['./page-help.component.less']
})
export class PageHelpComponent implements OnInit {
  @Input() isDisplay = false;
  @Output() isDisplayChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showChange() {
    console.log('showChange:'+this.isDisplay);
    this.isDisplayChange.emit(this.isDisplay);
  }
}
