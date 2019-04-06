import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExperiencePageService } from '../experience-page.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.less']
})
export class ExperienceDetailComponent implements OnInit {
  showLoading: boolean = true;
  experId: string = '';
  experData: any = {};
  constructor(private route: ActivatedRoute,
              private experPageService: ExperiencePageService) { }

  ngOnInit() {
    this.showLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.experId = params.get('id');
      this.showLoading = true;
      this.experPageService.getExperienceById(this.experId).subscribe(res => {
        this.experData = res;
        console.log(this.experData);
        setTimeout(() => {this.showLoading = false; }, 2000);
      });
    });
  }

}
