import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-theme',
  templateUrl: './experience-theme.component.html',
  styleUrls: ['./experience-theme.component.less']
})
export class ExperienceThemeComponent implements OnInit {
  @Input() experThemes: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  goThemeView(theme: any) {

  }
}
