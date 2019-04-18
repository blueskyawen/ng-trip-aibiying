import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-rest-room',
  templateUrl: './publish-rest-room.component.html',
  styleUrls: ['./publish-house.component.less']
})
export class PublishRestRoomComponent implements OnInit {
  @Output() restChange = new EventEmitter<string>();
  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
  }

  preStep() {
    this.restChange.emit('prev');
  }

  nextStep() {
    this.restChange.emit('next');
  }


}
