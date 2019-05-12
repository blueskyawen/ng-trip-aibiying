import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-privacy',
  templateUrl: './user-privacy.component.html',
  styleUrls: ['./user-privacy.component.less']
})
export class UserPrivacyComponent implements OnInit {
  privacyData: any = {
    contact: 1, search: 1
  };
  showMsg: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
