import { Component, OnInit } from '@angular/core';
import { SelfCenterService } from '../../self-center.service';

@Component({
  selector: 'app-publish-room',
  templateUrl: './publish-room.component.html',
  styleUrls: ['./publish-room.component.less','./publish-house.component.less']
})
export class PublishRoomComponent implements OnInit {

  constructor(public selfCenterService: SelfCenterService) { }

  ngOnInit() {
  }

}
