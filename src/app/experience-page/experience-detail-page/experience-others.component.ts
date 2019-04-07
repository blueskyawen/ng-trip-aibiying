import {Component, Input, OnInit} from '@angular/core';
import { ExperiencePageService } from '../experience-page.service';

@Component({
  selector: 'app-experience-others',
  templateUrl: './experience-others.component.html',
  styleUrls: ['./experience-others.component.less']
})
export class ExperienceOthersComponent implements OnInit {
  @Input() experData: any = {};
  experList: any[] = [];
  constructor(private experPageService: ExperiencePageService) { }

  ngOnInit() {
    this.experPageService.getExperienceList().subscribe(res => {
      this.experList = res.filter(item => item.city === this.experData.city);
      this.experList = this.experList.slice(0, 6);
    });
  }

}
