import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.less']
})
export class ExperienceListComponent implements OnInit {
  showLoading: boolean = true;
  constructor() { }

  ngOnInit() {
    this.showLoading = false;
  }

}
