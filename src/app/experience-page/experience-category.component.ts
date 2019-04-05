import { Component, OnInit, Input } from '@angular/core';
import { ClassicCityPageService } from '../classic-city-page/classic-city-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-category',
  templateUrl: './experience-category.component.html',
  styleUrls: ['./experience-category.component.less']
})
export class ExperienceCategoryComponent implements OnInit {
  @Input() cityName: string = '';
  categorys: any[] = [];
  showCate: boolean = false;
  constructor(private cityPageService: ClassicCityPageService, private router: Router) { }

  ngOnInit() {
    this.cityPageService.getExperType(this.cityName).subscribe(res => {
      this.categorys = res.types;
      this.showCate = true;
    });
  }

  goExperCategoryView(item: any) {
    this.router.navigate(['/experience/list', item.categroy, {city: this.cityName}]);
  }
}
