import { Component, OnInit } from '@angular/core';
import { ExperiencePageService } from '../../../experience-page/experience-page.service';
@Component({
  selector: 'app-exper-others',
  templateUrl: './exper-others.component.html',
  styleUrls: ['./exper-others.component.less']
})
export class ExperOthersComponent implements OnInit {
  expers: any[] = [];
  constructor(private experPageService: ExperiencePageService) { }

  ngOnInit() {
    this.experPageService.getExperienceList().subscribe(res => {
      this.expers = res.slice(0, 6);
    });
  }

}
