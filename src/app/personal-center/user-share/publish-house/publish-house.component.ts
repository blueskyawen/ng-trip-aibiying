import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';
import { DialogService } from '../../../core/dialog';
import { Observable } from 'rxjs';

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

  constructor(public selfCenterService: SelfCenterService,
              private dialogService : DialogService) { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('已有修改未保存，确定离开吗?');
  }

  stepProcChange(type: string) {
    if(type === 'next') {
      this.curStepIndex++;
    } else {
      this.curStepIndex--;
    }
  }

}
