import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-site',
  templateUrl: './publish-site.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishSiteComponent implements OnInit {
  @Output() siteChange = new EventEmitter<string>();
  showMsg: boolean = false;
  isValid: boolean = false;
  constructor(public selfCenterService: SelfCenterService,
              private router: Router) { }

  ngOnInit() {
  }

  preStep() {
    this.siteChange.emit('prev');
  }

  confirm() {
    this.showMsg = true;
    this.isValid = true;
    this.selfCenterService.publishHouse('api/publish/house',this.selfCenterService.houseData)
        .subscribe(res => {
          if(res.status) {
            if(res.status === 'success') {
              this.setSucess();
            } else {
              this.setFail();
            }
          }
        });
  }

  setSucess() {
    this.selfCenterService.publishSuccess = true;
    setTimeout(() => {
      this.showMsg = false;
      this.router.navigate(['/home']);
    },1000);
  }

  setFail() {
    this.showMsg = false;
    this.isValid = false;
  }

}
