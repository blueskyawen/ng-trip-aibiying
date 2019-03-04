import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./home-page.less']
})
export class PageHeadComponent implements OnInit {
  @Input() type: string = 'loginOut';
  searchText = '';
  userImg: string = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551707882841&di=66ee26cdc981feac8194e697a58e220e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F02%2F20140902122803_cjEEi.thumb.700_0.jpeg';
  constructor() { }

  ngOnInit() {
  }

}
