import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roomer-set-card',
  templateUrl: './roomer-set-card.component.html',
  styleUrls: ['./roomer-set-card.component.less']
})
export class RoomerSetCardComponent implements OnInit {
  @Input() person: any = {adult: 0, child: 0, baby: 0};
  @Output() personChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.personChange.emit();
  }

  confirm() {
    this.personChange.emit(this.person);
  }
}
