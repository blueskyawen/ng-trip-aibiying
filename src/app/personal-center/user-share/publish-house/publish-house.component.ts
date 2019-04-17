import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-house',
  templateUrl: './publish-house.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishHouseComponent implements OnInit {
  stepItems : any[] = [
    {label: '基本信息'},
    {label: '卧室信息'},
    {label: '卫生间配置'},
    {label: '配套设施'},
    {label: '地址'}
  ];
  curStepIndex : number = 0;

  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
  }

  preStep() {
    this.curStepIndex--;
  }

  nextStep() {
    this.curStepIndex++;
  }

}
