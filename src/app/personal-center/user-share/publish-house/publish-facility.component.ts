import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-facility',
  templateUrl: './publish-facility.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishFacilityComponent implements OnInit {
  @Output() facityChange = new EventEmitter<string>();
  facility: any = {
    basic: [],
    advance: [],
    kid: [],
    safe: []
  };
  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.selfCenterService.getHouseFacilitys().subscribe(res => {
      this.setFacityOptions(res);
    });
  }

  setFacityOptions(facity: any) {
    for(var key in facity) {
      if(Array.isArray(facity[key])) {
        facity[key].forEach(item => {
          this.facility[key].push({label: item.label, name: item.name,
            checked: this.selfCenterService.houseData.facility.includes(item.name) ? 1 : 0 });
        });
      }
    }
  }

  preStep() {
    this.facityChange.emit('prev');
  }

  nextStep() {
    this.saveRoomData();
    this.facityChange.emit('next');
  }

  saveRoomData() {
    for(var key in this.facility) {
      this.facility[key].forEach(item => {
        if(item.checked) {
          this.selfCenterService.houseData.facility.push(item.name);
        }
      });
    }
  }

}
