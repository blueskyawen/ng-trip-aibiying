import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience-overview',
  templateUrl: './experience-overview.component.html',
  styleUrls: ['./experience-overview.component.less']
})
export class ExperienceOverviewComponent implements OnInit {
  @Input() experData: any = {};
  @Output() contactChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.initExperImages();
  }

  initExperImages() {
    this.experData['imgOption'] = [];
    this.experData.images.forEach(image => {
      this.experData['imgOption'].push({
        url: image,
        disable: false,
        callback: () => {}
      });
    });
  }

  contactOwner() {
    this.contactChange.emit();
  }

}
