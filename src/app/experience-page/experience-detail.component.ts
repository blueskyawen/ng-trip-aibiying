import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.less']
})
export class ExperienceDetailComponent implements OnInit {
  showLoading: boolean = true;
  constructor() { }

  ngOnInit() {
    this.showLoading = false;
  }

}
