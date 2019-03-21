import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-list-invite',
  templateUrl: './house-list-invite.component.html',
  styleUrls: ['./house-list-invite.component.less']
})
export class HouseListInviteComponent implements OnInit {
  @Input() imgSrc: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  invitePerson() {
    this.router.navigate(['/invite']);
  }
}
