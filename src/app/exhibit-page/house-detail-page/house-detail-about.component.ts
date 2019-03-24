import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-house-detail-about',
  templateUrl: './house-detail-about.component.html',
  styleUrls: ['./house-detail-about.component.less']
})
export class HouseDetailAboutComponent implements OnInit {
  @Input() isShowsDialog: boolean = false;
  @Output() isShowsDialogChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  showChange() {
    this.isShowsDialogChange.emit(this.isShowsDialog);
  }
}
