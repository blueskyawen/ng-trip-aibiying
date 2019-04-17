import { Component, OnInit } from '@angular/core';
import { PageRegisterLoginService } from '../../home-page/page-register-login/page-register-login.service';
import { SelfCenterService } from '../self-center.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-become-hoster',
  templateUrl: './become-hoster.component.html',
  styleUrls: ['./become-hoster.component.less']
})
export class BecomeHosterComponent implements OnInit {
  options1 : any[] = [{label: '整个房源',value: 'Entire house',disable: false},
                    {label: '独立房间',value: 'Separate room',disable: false},
                    {label: '合住房间',value: 'Shared room',disable: false}];
  options2 : any[] = [{label: '1位房客',value: 1,disable: false},
                      {label: '2位房客',value: 2,disable: false},
                      {label: '3位房客',value: 3,disable: false},
                      {label: '4位房客',value: 4,disable: false},
                      {label: '5位房客',value: 5,disable: false},
                      {label: '6位房客',value: 6,disable: false},
                      {label: '7位房客',value: 7,disable: false},
                      {label: '8位房客',value: 8,disable: false},
                      {label: '9位房客',value: 9,disable: false}];

  hostData: any = {
    type: 'Entire house',
    person: 2,
    city: ''
  };


  constructor(public pageRegisterLoginService: PageRegisterLoginService,
              public selfCenterService: SelfCenterService,
              private router: Router) { }

  ngOnInit() {
  }

  goToPublish() {
      this.selfCenterService.houseData.type = this.hostData;
      this.router.navigate(['/selfCenter/share/publishHouse']);
  }
}
