import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-manage-text',
  templateUrl: './work-manage-text.component.html',
  styleUrls: ['./work-manage-text.component.less']
})
export class WorkManageTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToMore() {
    window.open('https://www.airbnb.cn/companies', '_blank');
  }
}
