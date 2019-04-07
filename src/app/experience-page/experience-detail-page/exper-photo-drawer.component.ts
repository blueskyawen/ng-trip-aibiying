import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exper-photo-drawer',
  templateUrl: './exper-photo-drawer.component.html',
  styleUrls: ['./exper-photo-drawer.component.less']
})
export class ExperPhotoDrawerComponent implements OnInit {
  @Input() isDisplay = false;
  @Output() isDisplayChange = new EventEmitter<any>();
  @Input() photos: any[]  = [];
  showPhotos: any[]  = [];
  showLoading: boolean = false;
  showButton: boolean = true;
  constructor() { }

  ngOnInit() {
    this.showPhotos = this.photos.slice(0, 4);
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

  showAllPhotos() {
    this.showLoading = true;
    this.showButton = false;
    setTimeout(() => {
      this.showPhotos = this.photos;
      this.showLoading = false;
    },1000);
  }
}
