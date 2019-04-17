import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-site',
  templateUrl: './publish-site.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishSiteComponent implements OnInit {

  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
  }

}
