import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-room',
  templateUrl: './publish-room.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishRoomComponent implements OnInit {
  @Output() roomChange = new EventEmitter<string>();
  bedOptions: any[] = [];
  roomData: any = {
    personNum: 2,
    num: 1,
    bedrooms: []
  };
  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.initRoomInfo();
    if(this.selfCenterService.bedOptions.length !== 0) {
      this.bedOptions = this.selfCenterService.bedOptions;
      this.setRoomBedInfo();
    } else {
      this.selfCenterService.getBedTypes().subscribe(res => {
        res.forEach(bed => {
          this.selfCenterService.bedOptions.push({label: bed.name,
            value: bed.value, disable: false});
        });
        this.bedOptions = this.selfCenterService.bedOptions;
        this.setRoomBedInfo();
      });
    }
  }

  initRoomInfo() {
    this.roomData.personNum = this.selfCenterService.houseData.room.personNum;
    this.roomData.num = this.selfCenterService.houseData.room.num;
    this.roomData.bedrooms = JSON.parse(JSON.stringify(this.selfCenterService.houseData.room.bedrooms));
  }

  setRoomBedInfo() {
    this.roomData.bedrooms.forEach(room => {
      room.bedOptions = this.bedOptions;
      room.selecteBedOptions = [];
      room.operTitle = '编辑';
      room.editState = false;
    });
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
    let changeNum = 0;
    if(this.roomData.num > this.roomData.bedrooms.length) {
      changeNum = this.roomData.num - this.roomData.bedrooms.length;
      for(let i = 0;i < changeNum;i++) {
        this.roomData.bedrooms.push({
          id: this.roomData.bedrooms.length + 1,
          beds: [],
          bedOptions: JSON.parse(JSON.stringify(this.bedOptions)),
          selecteBedOptions: [],
          operTitle: '编辑',
          editState: false,
        });
      }
    } else {
      changeNum = this.roomData.bedrooms.length - this.roomData.num;
      for(let i = 0;i < changeNum;i++) {
        this.roomData.bedrooms.pop();
      }
    }
  }

  preStep() {
    this.roomChange.emit('prev');
  }

  nextStep() {
    this.saveRoomData();
    this.roomChange.emit('next');
  }

  saveRoomData() {
    this.selfCenterService.houseData.room.personNum = this.roomData.personNum;
    this.selfCenterService.houseData.room.bedrooms = [];
    this.roomData.bedrooms.forEach(roomItem => {
      this.selfCenterService.houseData.room.bedrooms.push({
        id: roomItem.id, beds: roomItem.beds
      });
    });
    this.selfCenterService.houseData.room.num = this.selfCenterService.houseData.room.bedrooms.length;
  }

}
