import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-theme',
  templateUrl: './experience-theme.component.html',
  styleUrls: ['./experience-theme.component.less']
})
export class ExperienceThemeComponent implements OnInit {
  @Input() experThemes: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goThemeView(theme: any) {
    this.router.navigate(['/experience/list', theme.categroy, {city: 'all', theme: 'true'}]);
  }
}
