import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-basic',
  templateUrl: './publish-basic.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishBasicComponent implements OnInit {
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
  showLoading: boolean = false;
  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.showLoading = true;
    this.selfCenterService.getHouseTypes().subscribe(res => {
      this.houseTypes = res;
      this.houseTypes.forEach(typeItem => {
        typeItem.defaultColor = '#e6e6e6';
      });
      this.houseTypes[0].defaultColor = '#80d5ff';
      setTimeout(() => {this.showLoading = false;}, 500);
    });
  }

  selectHouseType(typeItem: any) {
    this.houseTypes.forEach(item => {
      item.defaultColor = '#e6e6e6';
    });
    typeItem.defaultColor = '#80d5ff';
    this.selfCenterService.houseData.basic.houseType = typeItem.value;
  }

  selectRentalType(rentalType: any) {
    this.selfCenterService.houseData.basic.rentalType = rentalType.value;
  }

}
