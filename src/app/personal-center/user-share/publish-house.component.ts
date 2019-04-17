import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../self-center.service';

@Component({
  selector: 'app-publish-house',
  templateUrl: './publish-house.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishHouseComponent implements OnInit {
  showLoading: boolean = false;
  stepItems : any[] = [
    {label: '基本信息'},
    {label: '卧室信息'},
    {label: '卫生间配置'},
    {label: '配套设施'},
    {label: '地址'}
  ];
  curStepIndex : number = 0;
  houseTypes: any[] = [];
  rentalTypes : any[] = [
    {label: '整个房源',value: 'Entire house',
      title: '房客独享整个房源，无需与您或他人共住'
    },
    {label: '独立房间',value: 'Separate room',
      title: '房客有自己的独立房间，与他人共享客厅等空间'},
    {label: '合住房间',value: 'Shared room',
      title: '房客住在与他人合用的卧室或公共区域'}
  ];
  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.showLoading = true;
    this.selfCenterService.getHouseTypes().subscribe(res => {
      this.houseTypes = res;
      this.houseTypes.forEach(typeItem => {
        typeItem.defaultColor = '#e6e6e6';
      });
      this.houseTypes[0].defaultColor = '#80d5ff';
      setTimeout(() => {this.showLoading = false;}, 1000);
    });

  }

  selectHouseType(typeItem: any) {
    this.houseTypes.forEach(item => {
      item.defaultColor = '#e6e6e6';
    });
    typeItem.selectColor = '#80d5ff';
    this.selfCenterService.houseData.basic.houseType = typeItem.value;
  }

  selectRentalType(rentalType: any) {
    this.selfCenterService.houseData.basic.rentalType = rentalType.value;
  }

  preStep() {
    this.curStepIndex--;
  }

  nextStep() {
    this.curStepIndex++;
  }

}
