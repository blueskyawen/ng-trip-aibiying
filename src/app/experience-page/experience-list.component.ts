import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.less']
})
export class ExperienceListComponent implements OnInit {
  showLoading: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.showLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.showLoading = false;
    });
  }

}
