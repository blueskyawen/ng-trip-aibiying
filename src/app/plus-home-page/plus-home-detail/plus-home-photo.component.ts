import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-home-photo',
  templateUrl: './plus-home-photo.component.html',
  styleUrls: ['./plus-home-photo.component.less']
})
export class PlusHomePhotoComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Input() photos: any[] = [];
  @Output() isDisplayChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

}
