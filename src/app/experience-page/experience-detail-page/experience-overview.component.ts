import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-overview',
  templateUrl: './experience-overview.component.html',
  styleUrls: ['./experience-overview.component.less']
})
export class ExperienceOverviewComponent implements OnInit {
  @Input() experData: any = {};
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

}
