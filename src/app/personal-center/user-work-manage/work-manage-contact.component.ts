import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-manage-contact',
  templateUrl: './work-manage-contact.component.html',
  styleUrls: ['./work-manage-contact.component.less']
})
export class WorkManageContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goTrust() {
    window.open('https://www.airbnb.cn/trust', '_blank');
  }

  goHelp() {
    window.open('https://www.airbnb.cn/help', '_blank');
  }
}
