import { Component, OnInit } from '@angular/core';
import { ExperiencePageService } from './experience-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-home',
  templateUrl: './experience-home.component.html',
  styleUrls: ['./experience-home.component.less']
})
export class ExperienceHomeComponent implements OnInit {
  showLoading: boolean = true;
  experData: any = {};
  constructor(private experPageService: ExperiencePageService, private router: Router) { }

  ngOnInit() {
    this.showLoading = true;
    this.experPageService.getExpersAndThemes().subscribe(res => {
      this.experData = res;
      setTimeout(() => {this.showLoading = false;}, 2000);
    });
  }

  goMoreExpers(name: string) {
    this.router.navigate(['/experience/list', 'all', {city: name}]);
  }
}
