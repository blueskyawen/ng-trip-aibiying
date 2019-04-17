import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-room',
  templateUrl: './publish-room.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishRoomComponent implements OnInit {
  bedTypes: any[] = [];
  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.selfCenterService.getBedTypes().subscribe(res => {
      this.bedTypes = res;
      this.setRoomBedInfo();
    });
  }

  setRoomBedInfo() {
    this.selfCenterService.houseData.room.bedrooms.forEach(room => {
      room.bedOptions = [];
      room.selecteBedOptions = [];
      room.operTitle = '编辑';
      room.editState = false;
      this.bedTypes.forEach(bed => {
        room.bedOptions.push({label: bed.name, value: bed.value, disable: false});
      });
    });
  }

  getBedNumPerRoom(room: any) {
    let bedNum = 0;
    room.beds.forEach(bed => {
      bedNum += bed.num;
    });
    return bedNum;
  }

  operBedRoom(room: any) {
    room.editState = !room.editState;
    room.operTitle = room.editState ? '完成' : '编辑';
  }

  bedOptionChange(room: any) {
    let operBed = {
      del: [],
      add: []
    };
    this.checkBedSelection(room, operBed);
    if (operBed.del.length !== 0) {
      room.beds = room.beds.filter(bed => { return !operBed.del.includes(bed.type); });
    }
    if (operBed.add.length !== 0) {
      room.selecteBedOptions.forEach(selectBed => {
        if(operBed.add.includes(selectBed.value)) {
          room.beds.push({type: selectBed.value, name: selectBed.label, num: 0});
        }
      });
    }
  }

  checkBedSelection(room: any, operBed: any) {
    room.beds.forEach(bed => {
      let tmpBed = room.selecteBedOptions.find(item => { return bed.type === item.value; });
      if(!tmpBed) {
        operBed.del.push(bed.type);
      }
    });
    room.selecteBedOptions.forEach(selectBed => {
      let tmpBed = room.beds.find(bed => { return bed.type === selectBed.value; });
      if(!tmpBed) {
        operBed.add.push(selectBed.value);
      }
    });
  }

  delBed(bed: any,room: any) {
    let tmpIndex = room.beds.findIndex(item => { return bed.type === item.type; });
    room.beds.splice(tmpIndex, 1);
    let tmpIndex2 = room.selecteBedOptions.findIndex(item => { return bed.type === item.value; });
    room.selecteBedOptions.splice(tmpIndex2, 1);
  }

  roomNumChange() {

  }

}
