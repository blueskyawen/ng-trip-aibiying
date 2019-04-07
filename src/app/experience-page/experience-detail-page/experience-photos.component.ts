import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-photos',
  templateUrl: './experience-photos.component.html',
  styleUrls: ['./experience-photos.component.less']
})
export class ExperiencePhotosComponent implements OnInit {
  @Input() experData: any = {};
  viewPhotos: string[] = [];
  isShowAllPhotos: boolean = false;
  constructor() { }

  ngOnInit() {
    this.experData.photos.forEach(item => {
      this.viewPhotos = this.viewPhotos.concat(item.list);
    });
    this.viewPhotos = this.viewPhotos.slice(0, 6);
  }

}
