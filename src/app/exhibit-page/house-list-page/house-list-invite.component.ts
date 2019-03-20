import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-list-invite',
  templateUrl: './house-list-invite.component.html',
  styleUrls: ['./house-list-invite.component.less']
})
export class HouseListInviteComponent implements OnInit {
  @Input() imgSrc: string = '';
  constructor() { }

  ngOnInit() {
  }

}
