import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.less']
})
export class WishListComponent implements OnInit {
  @Input() type: string = 'all';
  @Input() showProject: boolean = false;
  @Input() wishList: any[] = [];
  wishs: any[] = [];

  constructor() { }

  ngOnInit() {
    if(this.type === 'all') {
      this.wishs = this.wishList.slice(0, 9);
    } else {
      this.wishs = this.wishList;
    }
  }

}
